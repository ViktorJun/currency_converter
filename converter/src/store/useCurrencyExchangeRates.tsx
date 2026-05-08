import { create } from 'zustand';
import { LINK_API } from '../constants/Variables';
import type { CurrencyCode } from '../schemas/zodSchema';
import type { Dayjs } from 'dayjs';

type CurrencyRate = {
	rate: number;
};

type FetchCurrencyParams = {
	fromCurrency: CurrencyCode;
	toCurrency: CurrencyCode;
	selectedDate: Dayjs;
};

type CurrencyExchangeRatesState = {
	currency: CurrencyRate[];
	isLoading: boolean;
	error: string | null;
	fetchCurrency: (params: FetchCurrencyParams) => Promise<void>;
};

export const useCurrencyExchangeRates = create<CurrencyExchangeRatesState>(
	(set) => ({
		currency: [],
		isLoading: false,
		error: null,
		fetchCurrency: async ({ fromCurrency, toCurrency, selectedDate }) => {
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
