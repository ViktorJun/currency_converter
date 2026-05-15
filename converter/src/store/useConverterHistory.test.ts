import { beforeEach, describe, expect, it } from 'vitest';

import { useConverterHistory } from './useConverterHistory';

describe('useConverterHistory', () => {
	beforeEach(() => {
		localStorage.clear();
		useConverterHistory.setState({ history: [] });
	});

	it('prepends new entries to history', () => {
		useConverterHistory.getState().setHistory({
			date: '01.01.2026',
			fromAmount: '100',
			toAmount: '50',
			fromCurrency: 'USD',
			toCurrency: 'EUR',
		});

		useConverterHistory.getState().setHistory({
			date: '02.01.2026',
			fromAmount: '200',
			toAmount: '100',
			fromCurrency: 'USD',
			toCurrency: 'EUR',
		});

		const { history } = useConverterHistory.getState();

		expect(history).toHaveLength(2);
		expect(history[0].date).toBe('02.01.2026');
		expect(history[1].date).toBe('01.01.2026');
	});

	it('keeps only the latest 10 entries', () => {
		for (let i = 1; i <= 11; i += 1) {
			useConverterHistory.getState().setHistory({
				date: `${i}`.padStart(2, '0'),
				fromAmount: `${i}`,
				toAmount: `${i * 2}`,
				fromCurrency: 'USD',
				toCurrency: 'EUR',
			});
		}

		const { history } = useConverterHistory.getState();

		expect(history).toHaveLength(10);
		expect(history[0].date).toBe('11');
		expect(history[9].date).toBe('02');
	});

	it('clears the history', () => {
		useConverterHistory.getState().setHistory({
			date: '01.01.2026',
			fromAmount: '100',
			toAmount: '50',
			fromCurrency: 'USD',
			toCurrency: 'EUR',
		});

		useConverterHistory.getState().clearHistory();

		expect(useConverterHistory.getState().history).toEqual([]);
	});
});
