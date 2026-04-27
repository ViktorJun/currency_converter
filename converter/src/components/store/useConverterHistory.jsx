import {create} from 'zustand';
import {useDate} from "./useDate.jsx";
import {useCurrencyAmount} from "./useCurrencyAmount.jsx";
import {useCurrencyName} from "./useCurrencyName.jsx";

export const useConverterHistory = create((set) => ({
    history: [],
    setHistory: () => {
        const { today } = useDate.getState();
        const date = today.format('DD.MM.YYYY');
        const { toAmount, fromAmount} = useCurrencyAmount.getState();
        const {toCurrency, fromCurrency} = useCurrencyName.getState();
        set((state) => ({
            history: [
                {
                    date: date,
                    toAmount: toAmount,
                    fromAmount: fromAmount,
                    toCurrency: toCurrency,
                    fromCurrency: fromCurrency
                },
                ...state.history,
            ].slice(0, 10)
        }))
    },
    clearHistory: () => {
        set({
            history: [],
        })
    }
}))