import type { AmountField } from '../store/useCurrencyAmount';

type ConvertResult = {
	field: AmountField;
	value: string;
} | null;

export function convertAmount(
	nameAmount: AmountField,
	value: string,
	rate?: number
): ConvertResult {
	const isValidAmount = /^\d+(\.\d{0,2})?$/.test(value);
	if (!isValidAmount || !rate) {
		return null;
	}
	if (nameAmount === 'fromAmount') {
		return {
			field: 'toAmount',
			value: String((rate * Number(value)).toFixed(2)),
		};
	}
	if (nameAmount === 'toAmount') {
		return {
			field: 'fromAmount',
			value: String((Number(value) / rate).toFixed(2)),
		};
	}
	return null;
}
