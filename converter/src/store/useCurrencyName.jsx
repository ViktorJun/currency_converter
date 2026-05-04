import { create } from 'zustand';

export const useCurrencyName = create((set) => ({
  fromCurrency: 'UAH',
  toCurrency: 'USD',
  setCurrency: (field, value) => {
    set({ [field]: value });
  },
}));
