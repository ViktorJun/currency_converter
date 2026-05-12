import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import dayjs from 'dayjs';

import type { CurrencyFormValues, CurrencyCode } from '../../schemas/zodSchema';
import { formSchema } from '../../schemas/zodSchema';
import { ListOfCurrencies } from '../ui/ListOfCurrencies';
import { AmountInputField } from '../ui/AmountInputField';
import { ConverterDatePicker } from '../ui/ConverterDatePicker';
import { convertAmount } from '../../utils/convertAmount';
import { useCurrencyExchangeRates } from '../../store/useCurrencyExchangeRates';
import { useConverterHistory } from '../../store/useConverterHistory';

export function CurrencyConverter() {
	const fetchCurrency = useCurrencyExchangeRates(
		(state) => state.fetchCurrency
	);
	const currencyData = useCurrencyExchangeRates((state) => state.currency);
	const today = dayjs().startOf('day');
	const setHistory = useConverterHistory((state) => state.setHistory);
	const {
		control,
		handleSubmit,
		setValue,
		resetField,
		watch,
		formState: { errors },
	} = useForm<CurrencyFormValues>({
		resolver: zodResolver(formSchema),
		mode: 'onChange',
		defaultValues: {
			fromAmount: '',
			toAmount: '',
			fromCurrency: 'UAH',
			toCurrency: 'USD',
			selectedDate: dayjs().startOf('day'),
		},
	});
	const selectedDate = watch('selectedDate');
	const fromCurrency = watch('fromCurrency');
	const toCurrency = watch('toCurrency');
	const isToday = selectedDate.isSame(today, 'day');
	const resetAmounts = () => {
		resetField('fromAmount', { defaultValue: '' });
		resetField('toAmount', { defaultValue: '' });
	};
	const onSubmit = (data: CurrencyFormValues): void => {
		if (!isToday) return;
		setHistory({
			date: selectedDate.format('DD.MM.YYYY'),
			fromAmount: data.fromAmount,
			toAmount: data.toAmount,
			fromCurrency: data.fromCurrency,
			toCurrency: data.toCurrency,
		});
	};
	const handleChange = (nameAmount: 'toAmount' | 'fromAmount' , value: string): void => {
		const result = convertAmount(nameAmount, value, currencyData[0]?.rate);
		if (!result) return;
		setValue(result.field, result.value, { shouldValidate: true });
	};
	useEffect(() => {
		fetchCurrency({
			fromCurrency,
			toCurrency,
			selectedDate,
		});
	}, [fromCurrency, toCurrency, selectedDate, fetchCurrency]);
	return (
		<div className="bg-brand-bg px-7 py-10" id="converter">
			<div className="bg-brand-white flex flex-col gap-y-5 place-self-center px-3 py-14 md:px-10">
				<h1 className="w-full text-[29px] font-bold">
					Конвертер валют
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex justify-between gap-x-3 lg:gap-x-9"
				>
					<div className="grid w-fit grid-cols-[minmax(160px,220px)_minmax(80px,100px)] grid-rows-[40px_80px_56px] gap-x-4 gap-y-1">
						<label className="text-brand-text col-span-2">
							В мене є:
						</label>
						<AmountInputField
							name="fromAmount"
							control={control}
							error={errors.fromAmount}
							onValueChange={(value: string) => {
								handleChange('fromAmount', value);
							}}
						/>
						<ListOfCurrencies
							value={fromCurrency}
							excludedValue={toCurrency}
							onChange={(value: CurrencyCode) => {
								setValue('fromCurrency', value);
								resetAmounts();
							}}
						/>
						<ConverterDatePicker
							value={selectedDate}
							onChange={(value) => {
								setValue('selectedDate', value);
								resetAmounts();
							}}
							minDate={today.subtract(1, 'week')}
							maxDate={today}
						/>
					</div>
					<SwapHorizIcon
						sx={{
							color: 'var(--color-brand-text)',
							fontSize: 32,
							alignSelf: 'center',
							marginBottom: '40px',
						}}
					/>
					<div className="grid w-fit grid-cols-[minmax(160px,220px)_minmax(80px,100px)] grid-rows-[40px_80px_56px] gap-x-4 gap-y-1">
						<label className="text-brand-text col-span-2">
							Хочу придбати:
						</label>
						<AmountInputField
							name="toAmount"
							control={control}
							error={errors.toAmount}
							onValueChange={(value: string) => {
								handleChange('toAmount', value);
							}}
						/>
						<ListOfCurrencies
							value={toCurrency}
							excludedValue={fromCurrency}
							onChange={(value: CurrencyCode) => {
								setValue('toCurrency', value);
								resetAmounts();
							}}
						/>
						<button
							type="submit"
							disabled={!isToday}
							className={`col-span-2 justify-self-end rounded-md px-5 ${isToday ? 'bg-brand-primary text-white' : 'cursor-not-allowed bg-gray-200'}`}
						>
							Зберегти результат
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
