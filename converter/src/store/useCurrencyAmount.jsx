import { create } from 'zustand';

export const useCurrencyAmount = create((set) => ({
	toAmount: '',
	fromAmount: '',
	setAmount: (field, value) => {
		set({ [field]: value });
	},
}));
