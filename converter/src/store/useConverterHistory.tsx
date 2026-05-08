import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { CurrencyCode } from '../schemas/zodSchema';

type HistoryItem = {
	date: string;
	toAmount: string;
	fromAmount: string;
	toCurrency: CurrencyCode;
	fromCurrency: CurrencyCode;
};

type ConverterHistoryState = {
	history: HistoryItem[];
	setHistory: (item: HistoryItem) => void;
	clearHistory: () => void;
};

export const useConverterHistory = create<ConverterHistoryState>()(
	persist(
		(set) => ({
			history: [],
			setHistory: (item) => {
				set((state) => ({
					history: [item, ...state.history].slice(0, 10),
				}));
			},
			clearHistory: () => {
				set({ history: [] });
			},
		}),
		{
			name: 'converterHistory',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				history: state.history,
			}),
		}
	)
);
