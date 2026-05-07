import { create } from 'zustand';
import { LINK_API } from '../constants/Variables';
import { useCurrencyName } from './useCurrencyName';
import { useDate } from './useDate';

type CurrencyRate = {
	rate: number;
};

type CurrencyExchangeRatesState = {
	currency: CurrencyRate[];
	isLoading: boolean;
	error: string | null;
	fetchCurrency: () => Promise<void>;
};

export const useCurrencyExchangeRates = create<CurrencyExchangeRatesState>(
	(set) => ({
		currency: [],
		isLoading: false,
		error: null,
		fetchCurrency: async () => {
			const { fromCurrency, toCurrency } = useCurrencyName.getState();
			const { selectedDate } = useDate.getState();
			const formattedDate = selectedDate.format('YYYY-MM-DD');
			set({ isLoading: true, error: null });
			try {
				const response = await fetch(
					`${LINK_API}base=${fromCurrency}&quotes=${toCurrency}&date=${formattedDate}`
				);
				if (!response.ok) {
					throw new Error('Error fetching currency data.');
				}
				const data = await response.json();
				set({ currency: data, isLoading: false });
			} catch (error) {
				set({
					error:
						error instanceof Error
							? error.message
							: 'Unknown error',
					isLoading: false,
				});
			}
		},
	})
);
