import { create } from 'zustand';
import dayjs from 'dayjs';

export const useDate = create((set) => ({
	today: dayjs().startOf('day'),
	selectedDate: dayjs().startOf('day'),
	setSelectedDate: (date) => set({ selectedDate: date }),
}));
