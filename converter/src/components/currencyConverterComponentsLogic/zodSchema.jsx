import {z} from "zod";

const amountSchema = z
    .string()
    .min(1, { message: 'Введіть суму' })
    .regex(/^\d+(\.\d{0,2})?$/, {
        message: 'Можна вводити тільки число'
    });
export const formSchema = z.object({
    fromAmount: amountSchema,
    toAmount: amountSchema,
});
