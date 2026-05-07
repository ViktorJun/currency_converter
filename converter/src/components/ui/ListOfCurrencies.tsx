import { useCurrencyAmount } from '../../store/useCurrencyAmount';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export type ListOfCurrenciesProps = {
	value: string;
	onChange: (value: string) => void;
};

type menuItemType = { value: string };

const menuItem: menuItemType[] = [
	{ value: 'UAH' },
	{ value: 'USD' },
	{ value: 'EUR' },
	{ value: 'GBR' },
];

export function ListOfCurrencies({ value, onChange }: ListOfCurrenciesProps) {
	const setAmount = useCurrencyAmount((state) => state.setAmount);
	return (
		<Select
			value={value}
			onChange={(e) => {
				onChange(e.target.value);
				setAmount('toAmount', '');
				setAmount('fromAmount', '');
			}}
			sx={{
				height: '56px',
				minWidth: '85px',
				maxWidth: '100px',
				'& .MuiSelect-select': {
					color: 'var(--color-brand-text)',
				},
			}}
		>
			{menuItem.map((item) => (
				<MenuItem
					sx={{ color: 'var(--color-brand-text)' }}
					value={item.value}
				>
					{item.value}
				</MenuItem>
			))}
		</Select>
	);
}
