import { z } from 'zod';
import dayjs, { type Dayjs } from 'dayjs';

const amountSchema = z
	.string()
	.min(1, { message: 'Введіть суму' })
	.regex(/^\d+(\.\d{0,2})?$/, {
		message: 'Можна вводити тільки число',
	});

export const currencyCodeSchema = z.enum(['UAH', 'USD', 'EUR', 'GBP']);
const dayjsSchema = z.custom<Dayjs>(
	(value): value is Dayjs => dayjs.isDayjs(value),
	{
		message: 'Оберіть дату',
	}
);
export const formSchema = z.object({
	fromAmount: amountSchema,
	toAmount: amountSchema,
	fromCurrency: currencyCodeSchema,
	toCurrency: currencyCodeSchema,
	selectedDate: dayjsSchema,
});

export type CurrencyFormValues = z.infer<typeof formSchema>;
export type CurrencyCode = z.infer<typeof currencyCodeSchema>;
