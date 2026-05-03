import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {ListOfCurrencies} from "../ui/ListOfCurrencies.jsx";
import {useCurrencyName} from "../../store/useCurrencyName.jsx";
import {useCurrencyExchangeRates} from "../../store/useCurrencyExchangeRates.jsx";
import { useEffect } from "react";
import {useCurrencyAmount} from "../../store/useCurrencyAmount.jsx";
import {formSchema} from "../../schemas/zodSchema.jsx";
import {convertAmount} from "../../utils/convertAmount.jsx";
import {ConverterDatePicker} from "../ui/ConverterDatePicker.jsx";
import {useDate} from "../../store/useDate.jsx";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import {AmountInputField} from "../ui/AmountInputField.jsx";
import {useConverterHistory} from "../../store/useConverterHistory.jsx";

export function CurrencyConverter() {
    const fromCurrency = useCurrencyName((state) => state.fromCurrency);
    const toCurrency = useCurrencyName((state) => state.toCurrency);
    const setCurrency = useCurrencyName((state) => state.setCurrency);
    const fetchCurrency = useCurrencyExchangeRates((state) => state.fetchCurrency);
    const currencyData = useCurrencyExchangeRates((state) => state.currency);
    const setAmount = useCurrencyAmount((state) => state.setAmount);
    const toAmount = useCurrencyAmount((state) => state.toAmount);
    const fromAmount = useCurrencyAmount((state) => state.fromAmount);
    const selectedDate = useDate((state) => state.selectedDate);
    const today = useDate((state) => state.today);
    const setHistory = useConverterHistory((state) => state.setHistory);
    const isToday = selectedDate.isSame(today, 'day');
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            fromAmount: '',
            toAmount: '',
        }
    });
    const onSubmit = () => {
        if (!isToday) return;
        setHistory()
    };
    const handleChange = (nameAmount, value) => {
        const result = convertAmount(nameAmount, value, currencyData[0]?.rate);
        if (!result) {
            return;
        }
        setAmount(result.field, result.value);
        setValue(result.field, result.value, { shouldValidate: true });
    }
    useEffect(() => {
        fetchCurrency();
    }, [fromCurrency, toCurrency, fetchCurrency, selectedDate]);
    return (
        <div className='bg-brand-bg px-7 py-10' id='converter'>
            <div className='flex flex-col place-self-center px-3 py-14 md:px-10 bg-brand-white gap-y-5'>
                <h1 className='w-full text-[29px] font-bold'>Конвертер валют</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex justify-between gap-x-3 lg:gap-x-9'>
                    <div className='grid grid-cols-[minmax(160px,220px)_minmax(80px,100px)] grid-rows-[40px_80px_56px] gap-x-4 w-fit gap-y-1'>
                        <label className='col-span-2 text-brand-text'>В мене є:</label>
                        <AmountInputField
                            name='fromAmount'
                            control={control}
                            value={fromAmount}
                            error={errors.fromAmount}
                            onValueChange={(value) => {
                                setAmount('fromAmount', value);
                                handleChange('fromAmount', value);
                            }}
                        />
                        <ListOfCurrencies
                            value={fromCurrency}
                            onChange={(value) => setCurrency('fromCurrency', value)}
                        />
                        <ConverterDatePicker />
                    </div>
                    <SwapHorizIcon sx={{
                        color: 'var(--color-brand-text)',
                        fontSize: 32,
                        alignSelf: 'center',
                        marginBottom: '40px',
                    }}/>
                    <div className='grid grid-cols-[minmax(160px,220px)_minmax(80px,100px)] grid-rows-[40px_80px_56px] gap-x-4 w-fit gap-y-1'>
                        <label className='col-span-2 text-brand-text'>Хочу придбати:</label>
                        <AmountInputField
                            name='toAmount'
                            control={control}
                            value={toAmount}
                            error={errors.toAmount}
                            onValueChange={(value) => {
                                setAmount('toAmount', value);
                                handleChange('toAmount', value);
                            }}
                        />
                        <ListOfCurrencies
                            value={toCurrency}
                            onChange={(value) => setCurrency('toCurrency', value)}
                        />
                        <button
                            type="submit"
                            disabled={!isToday}
                            className={
                                `col-span-2 justify-self-end px-5 rounded-md
                                ${isToday ? 'bg-brand-primary text-white' : 'bg-gray-200 cursor-not-allowed'}`
                            }
                        >
                            Зберегти результат
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}