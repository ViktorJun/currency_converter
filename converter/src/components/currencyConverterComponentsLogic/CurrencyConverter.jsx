import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import {ListOfCurrencies} from "./ListOfCurrencies.jsx";
import {useCurrencyName} from "../store/useCurrencyName.jsx";
import {useCurrencyExchangeRates} from "../store/useCurrencyExchangeRates.jsx";
import { useEffect } from "react";
import {useCurrencyAmount} from "../store/useCurrencyAmount.jsx";
import {formSchema} from "./zodSchema.jsx";
import {convertAmount} from "./convertAmount.jsx";

export function CurrencyConverter() {
    const fromCurrency = useCurrencyName((state) => state.fromCurrency);
    const toCurrency = useCurrencyName((state) => state.toCurrency);
    const setCurrency = useCurrencyName((state) => state.setCurrency);
    const fetchCurrency = useCurrencyExchangeRates((state) => state.fetchCurrency);
    const currencyData = useCurrencyExchangeRates((state) => state.currency);
    const setAmount = useCurrencyAmount((state) => state.setAmount);
    const toAmount = useCurrencyAmount((state) => state.toAmount);
    const fromAmount = useCurrencyAmount((state) => state.fromAmount);
    const {
        register,
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
    }, [fromCurrency, toCurrency, fetchCurrency]);
    return (
        <div>
            <h1>Конвертер валют</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>В мене є:</label>
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={13}
                    {...register("fromAmount", {
                        onChange: (event) => {
                            const value = event.target.value;
                            setAmount('fromAmount', value);
                            handleChange('fromAmount' ,value)
                        },
                    })}
                    value={fromAmount}
                />
                {errors.fromAmount && (
                    <span className="text-red-600">
                        {errors.fromAmount.message}
                    </span>
                )}
                <ListOfCurrencies
                    value={fromCurrency}
                    onChange={(value) => setCurrency('fromCurrency', value)}
                />
                <label>Хочу придбати:</label>
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={13}
                    {...register("toAmount", {
                        onChange: (event) => {
                            const value = event.target.value;
                            setAmount('toAmount', value);
                            handleChange('toAmount', value);
                        },
                    })}
                    value={toAmount}
                />
                {errors.toAmount && (
                    <span className="text-red-600">
                        {errors.toAmount.message}
                    </span>
                )}
                <ListOfCurrencies
                    value={toCurrency}
                    onChange={(value) => setCurrency('toCurrency', value)}
                />
                <button type="submit">Конвертувати</button>
            </form>
        </div>
    )
}