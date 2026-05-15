import { describe, expect, it } from 'vitest';

import { convertAmount } from './convertAmount';

describe('convertAmount', () => {
	it('converts from source amount to target amount', () => {
		expect(convertAmount('fromAmount', '100', 0.5)).toEqual({
			field: 'toAmount',
			value: '50.00',
		});
	});

	it('converts from target amount back to source amount', () => {
		expect(convertAmount('toAmount', '50', 0.5)).toEqual({
			field: 'fromAmount',
			value: '100.00',
		});
	});

	it('returns null for invalid input or missing rate', () => {
		expect(convertAmount('fromAmount', 'abc', 0.5)).toBeNull();
		expect(convertAmount('fromAmount', '100')).toBeNull();
	});
});
