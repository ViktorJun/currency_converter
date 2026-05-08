import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

type ConverterDatePickerProps = {
	value: Dayjs;
	onChange: (value: Dayjs) => void;
	minDate: Dayjs;
	maxDate: Dayjs;
};

export function ConverterDatePicker({
	value,
	onChange,
	minDate,
	maxDate,
}: ConverterDatePickerProps) {
	return (
		<DatePicker
			value={value}
			onChange={(newDate: Dayjs | null) => {
				if (newDate) {
					onChange(newDate);
				}
			}}
			minDate={minDate}
			maxDate={maxDate}
			sx={{
				maxWidth: '220px',
				'& .MuiPickersInputBase-sectionsContainer': {
					color: 'var(--color-brand-text)',
				},
				'& .MuiPickersSectionList-root': {
					color: 'var(--color-brand-text)',
				},
			}}
		/>
	);
}
