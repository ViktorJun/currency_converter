import { z } from 'zod';
import dayjs, { type Dayjs } from 'dayjs';
import { questionsSelectProblems } from '../constants/Variables';

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

export const formQuestionsSchema = z.object({
	name: z
		.string({ message: "Введіть ім'я" })
		.min(1, { message: "Введіть ім'я" })
		.max(15, { message: 'Максимальна кількість символів 15' }),
	email: z.email({ message: 'Введіть коректний Email' }),
	theme: z.enum(questionsSelectProblems, {
		message: 'Оберіть тему звернення',
	}),
	message: z
		.string({ message: 'Опишіть вашу проблему, мінімум 5 символів' })
		.min(5, { message: 'Опишіть вашу проблему, мінімум 5 символів' })
		.max(150, { message: 'Максимальна кількість символів 150' }),
});

export type QuestionsFormValues = z.infer<typeof formQuestionsSchema>;
export type CurrencyFormValues = z.infer<typeof formSchema>;
export type CurrencyCode = z.infer<typeof currencyCodeSchema>;
