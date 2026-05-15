import { Controller } from 'react-hook-form';
import type { Control, FieldError, Path } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import type { CurrencyFormValues } from '../../schemas/zodSchema';

type AmountInputFieldProps = {
	name: Path<CurrencyFormValues>;
	control: Control<CurrencyFormValues>;
	error?: FieldError;
	onValueChange: (value: string) => void;
};

export function AmountInputField({
	name,
	control,
	error,
	onValueChange,
}: AmountInputFieldProps) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					onChange={(event) => {
						const nextValue = event.target.value;
						field.onChange(nextValue);
						onValueChange(nextValue);
					}}
					error={!!error}
					helperText={error?.message}
					slotProps={{
						htmlInput: {
							maxLength: 8,
							inputMode: 'numeric',
						},
					}}
					sx={{
						maxWidth: '100%',
						'& .MuiInputBase-input': {
							color: 'var(--color-brand-text)',
						},
					}}
				/>
			)}
		/>
	);
}
