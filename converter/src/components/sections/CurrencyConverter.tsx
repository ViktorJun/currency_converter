import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

import { ListOfCurrencies } from '../ui/ListOfCurrencies';
import { AmountInputField } from '../ui/AmountInputField';
import { ConverterDatePicker } from '../ui/ConverterDatePicker';
import { formSchema } from '../../schemas/zodSchema';
import { convertAmount } from '../../utils/convertAmount';
import { useCurrencyName } from '../../store/useCurrencyName';
import {
	useCurrencyAmount,
	type AmountField,
} from '../../store/useCurrencyAmount';
import { useCurrencyExchangeRates } from '../../store/useCurrencyExchangeRates';
import { useDate } from '../../store/useDate';
import { useConverterHistory } from '../../store/useConverterHistory';

export function CurrencyConverter() {
	const fromCurrency = useCurrencyName((state) => state.fromCurrency);
	const toCurrency = useCurrencyName((state) => state.toCurrency);
	const setCurrency = useCurrencyName((state) => state.setCurrency);

	const fetchCurrency = useCurrencyExchangeRates(
		(state) => state.fetchCurrency
	);
	const currencyData = useCurrencyExchangeRates((state) => state.currency);

	const setAmount = useCurrencyAmount((state) => state.setAmount);
	const fromAmount = useCurrencyAmount((state) => state.fromAmount);
	const toAmount = useCurrencyAmount((state) => state.toAmount);

	const selectedDate = useDate((state) => state.selectedDate);
	const today = useDate((state) => state.today);

	const setHistory = useConverterHistory((state) => state.setHistory);

	const isToday = selectedDate.isSame(today, 'day');
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(formSchema),
		mode: 'onChange',
		defaultValues: {
			fromAmount: '',
			toAmount: '',
		},
	});
	const onSubmit = (): void => {
		if (!isToday) return;
		setHistory();
	};
	const handleChange = (nameAmount: AmountField, value: string): void => {
		const result = convertAmount(nameAmount, value, currencyData[0]?.rate);
		if (!result) return;
		setAmount(result.field, result.value);
		setValue(result.field, result.value, { shouldValidate: true });
	};
	useEffect(() => {
		fetchCurrency();
	}, [fromCurrency, toCurrency, fetchCurrency, selectedDate]);
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
							value={fromAmount}
							error={errors.fromAmount}
							onValueChange={(value: string) => {
								setAmount('fromAmount', value);
								handleChange('fromAmount', value);
							}}
						/>
						<ListOfCurrencies
							value={fromCurrency}
							onChange={(value: string) =>
								setCurrency('fromCurrency', value)
							}
						/>
						<ConverterDatePicker />
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
							value={toAmount}
							error={errors.toAmount}
							onValueChange={(value: string) => {
								setAmount('toAmount', value);
								handleChange('toAmount', value);
							}}
						/>
						<ListOfCurrencies
							value={toCurrency}
							onChange={(value: string) =>
								setCurrency('toCurrency', value)
							}
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
