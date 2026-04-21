import {create} from 'zustand';
import {LINK_API} from "../Variables.jsx";
import {useCurrencyName} from "./useCurrencyName";
export const useCurrencyExchangeRates = create((set) => ({
    currency: [],
    isLoading: false,
    error: null,
    fetchCurrency: async () => {
        const { fromCurrency, toCurrency } = useCurrencyName.getState();
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(`${LINK_API}base=${fromCurrency}&quotes=${toCurrency}`);
            if (!response.ok) {throw new Error('Error fetching currency data.')}
            const data = await response.json();
            set({ currency: data, isLoading: false });
        }catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}))