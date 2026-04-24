import {Controller, useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import {ListOfCurrencies} from "./ListOfCurrencies.jsx";
import {useCurrencyName} from "../store/useCurrencyName.jsx";
import {useCurrencyExchangeRates} from "../store/useCurrencyExchangeRates.jsx";
import { useEffect } from "react";
import {useCurrencyAmount} from "../store/useCurrencyAmount.jsx";
import {formSchema} from "./zodSchema.jsx";
import {convertAmount} from "./convertAmount.jsx";
import TextField from '@mui/material/TextField';
import {ConverterDatePicker} from "./ConverterDatePicker.jsx";
import {useDate} from "../store/useDate.jsx";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

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
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    const handleChange = (nameAmount, value) => {
        const result = convertAmount(nameAmount, value, currencyData[0]?.rate);
        if (!result) {
            return;
        }
        setAmount(result.field, result.value);
    }
    useEffect(() => {
        fetchCurrency();
    }, [fromCurrency, toCurrency, fetchCurrency, selectedDate]);
    return (
        <div className='bg-brand-bg px-7 py-10'>
            <div className='flex flex-col place-self-center px-3 py-14 md:px-10 bg-brand-white gap-y-5'>
                <h1 className='w-full text-[29px] font-bold'>Конвертер валют</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex justify-between gap-x-3 lg:gap-x-9'>
                    <div className='grid grid-cols-[minmax(160px,220px)_minmax(80px,100px)] grid-rows-[40px_80px_56px] gap-x-4 w-fit gap-y-1'>
                        <label className='col-span-2 text-brand-text'>В мене є:</label>
                        <Controller
                            name="fromAmount"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    value={fromAmount}
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        field.onChange(value);
                                        setAmount('fromAmount', value);
                                        handleChange('fromAmount', value);
                                    }}
                                    error={!!errors.fromAmount}
                                    helperText={errors.fromAmount?.message}
                                    slotProps={{
                                        htmlInput: {
                                            maxLength: 13,
                                            inputMode: 'numeric',
                                        },
                                    }}
                                    sx={{
                                        maxWidth: '220px',
                                        '& .MuiInputBase-input': {
                                            color: 'var(--color-brand-text)',
                                        },
                                    }}
                                />
                            )}
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
                        <Controller
                            name="toAmount"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    value={toAmount}
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        field.onChange(value);
                                        setAmount('toAmount', value);
                                        handleChange('toAmount', value);
                                    }}
                                    error={!!errors.toAmount}
                                    helperText={errors.toAmount?.message}
                                    slotProps={{
                                        htmlInput: {
                                            maxLength: 13,
                                            inputMode: 'numeric',
                                        },
                                    }}
                                    sx={{
                                        maxWidth: '220px',
                                        '& .MuiInputBase-input': {
                                            color: 'var(--color-brand-text)',
                                        },
                                    }}
                                />
                            )}
                        />
                        <ListOfCurrencies
                            value={toCurrency}
                            onChange={(value) => setCurrency('toCurrency', value)}
                        />
                        <button type="submit" className='col-span-2 justify-self-end text-white bg-brand-primary px-5 rounded-md'>Зберегти результат</button>
                    </div>
                </form>
            </div>
        </div>
    )
}