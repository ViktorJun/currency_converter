import { create } from 'zustand';
import { useDate } from './useDate';
import { useCurrencyAmount } from './useCurrencyAmount';
import { useCurrencyName } from './useCurrencyName';
import { persist, createJSONStorage } from 'zustand/middleware';

type HistoryItem = {
	date: string;
	toAmount: string;
	fromAmount: string;
	toCurrency: string;
	fromCurrency: string;
};

type ConverterHistoryState = {
	history: HistoryItem[];
	setHistory: () => void;
	clearHistory: () => void;
};

export const useConverterHistory = create<ConverterHistoryState>()(
	persist(
		(set) => ({
			history: [],
			setHistory: () => {
				const { today } = useDate.getState();
				const date = today.format('DD.MM.YYYY');
				const { toAmount, fromAmount } = useCurrencyAmount.getState();
				const { toCurrency, fromCurrency } = useCurrencyName.getState();
				set((state) => ({
					history: [
						{
							date: date,
							toAmount: toAmount,
							fromAmount: fromAmount,
							toCurrency: toCurrency,
							fromCurrency: fromCurrency,
						},
						...state.history,
					].slice(0, 10),
				}));
			},
			clearHistory: () => {
				set({
					history: [],
				});
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
