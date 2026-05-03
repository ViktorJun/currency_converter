import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useDate} from "../../store/useDate.jsx";

export function ConverterDatePicker() {
    const today = useDate((state) => state.today);
    const weekAgo = today.subtract(1, 'week');
    const setSelectedDate = useDate((state) => state.setSelectedDate);
    return (
        <DatePicker
            defaultValue={today}
            onChange={(newDate) => setSelectedDate(newDate)}
            minDate={weekAgo}
            maxDate={today}
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
