import TextField from '@mui/material/TextField';
import { useController, type Control, type Path } from 'react-hook-form';
import type { QuestionsFormValues } from '../../schemas/zodSchema';

type FormInputProps = {
	name: Path<QuestionsFormValues>;
	control: Control<QuestionsFormValues>;
	placeholder?: string;
	multiline?: boolean;
	rows?: number;
};

export function FormInput({
	name,
	control,
	placeholder,
	multiline,
	rows,
}: FormInputProps) {
	const {
		field,
		fieldState: { error },
	} = useController({ name, control });
	return (
		<TextField
			{...field}
			multiline={multiline}
			placeholder={placeholder}
			error={!!error}
			minRows={rows}
			maxRows={rows}
			helperText={error?.message}
			sx={{
				width: '100%',
				'& .MuiInputBase-root': multiline ? {} : { height: 40 },
			}}
		/>
	);
}
