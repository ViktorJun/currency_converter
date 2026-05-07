import { create } from 'zustand';
import dayjs, { type Dayjs } from 'dayjs';

type DateState = {
	today: Dayjs;
	selectedDate: Dayjs;
	setSelectedDate: (date: Dayjs) => void;
};

export const useDate = create<DateState>((set) => ({
	today: dayjs().startOf('day'),
	selectedDate: dayjs().startOf('day'),
	setSelectedDate: (date) => set({ selectedDate: date }),
}));
