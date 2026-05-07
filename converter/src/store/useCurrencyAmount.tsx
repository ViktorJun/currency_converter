import { create } from 'zustand';

export type AmountField = 'fromAmount' | 'toAmount';

type CurrencyAmountState = {
	fromAmount: string;
	toAmount: string;
	setAmount: (field: AmountField, value: string) => void;
};

export const useCurrencyAmount = create<CurrencyAmountState>((set) => ({
	toAmount: '',
	fromAmount: '',
	setAmount: (field, value) => {
		set({ [field]: value });
	},
}));
