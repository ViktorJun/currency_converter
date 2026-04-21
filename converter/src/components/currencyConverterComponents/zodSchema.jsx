import {z} from "zod";

const amountSchema = z
    .string()
    .min(1, { message: 'Введіть суму' })
    .max(13, { message: 'Максимум 13 символів' })
    .regex(/^\d{1,10}(\.\d{0,2})?$/, {
        message: 'Можна вводити число з максимум 2 цифрами після крапки'
    });
export const formSchema = z.object({
    fromAmount: amountSchema,
    toAmount: amountSchema,
});
