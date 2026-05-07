import { create } from 'zustand';

export type CurrencyField = 'fromCurrency' | 'toCurrency';

export type CurrencyNameState = {
	fromCurrency: string;
	toCurrency: string;
	setCurrency: (field: CurrencyField, value: string) => void;
};

export const useCurrencyName = create<CurrencyNameState>((set) => ({
	fromCurrency: 'UAH',
	toCurrency: 'USD',
	setCurrency: (field, value) => {
		set({ [field]: value });
	},
}));
