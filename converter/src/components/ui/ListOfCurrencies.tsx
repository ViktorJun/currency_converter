import type { CurrencyCode } from '../../schemas/zodSchema';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export type ListOfCurrenciesProps = {
	value: CurrencyCode;
	onChange: (value: CurrencyCode) => void;
	excludedValue?: CurrencyCode;
};
const menuItems: CurrencyCode[] = ['UAH', 'USD', 'EUR', 'GBP'];

export function ListOfCurrencies({
	value,
	onChange,
	excludedValue,
}: ListOfCurrenciesProps) {
	return (
		<Select
			value={value}
			onChange={(event: SelectChangeEvent<CurrencyCode>) => {
				onChange(event.target.value as CurrencyCode);
			}}
			sx={{
				height: '56px',
				Width: '100%',
				maxWidth: '88px',
				'& .MuiSelect-select': {
					color: 'var(--color-brand-text)',
				},
			}}
		>
			{menuItems.map((item) => (
				<MenuItem
					key={item}
					sx={{ color: 'var(--color-brand-text)' }}
					value={item}
					disabled={item === excludedValue}
				>
					{item}
				</MenuItem>
			))}
		</Select>
	);
}
