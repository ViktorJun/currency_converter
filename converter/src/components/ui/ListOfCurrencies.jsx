import {useCurrencyAmount} from '../../store/useCurrencyAmount.jsx';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function ListOfCurrencies({ value, onChange }) {
    const setAmount = useCurrencyAmount((state) => state.setAmount);
    return (
        <Select
            value={value}
            onChange={(e) => {
                onChange(e.target.value)
                setAmount('toAmount', '')
                setAmount('fromAmount', '')
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
            <MenuItem sx={{color: 'var(--color-brand-text)'}} value={'UAH'}>UAH</MenuItem>
            <MenuItem sx={{color: 'var(--color-brand-text)'}} value={'USD'}>USD</MenuItem>
            <MenuItem sx={{color: 'var(--color-brand-text)'}} value={'EUR'}>EUR</MenuItem>
            <MenuItem sx={{color: 'var(--color-brand-text)'}} value={'GBR'}>GBR</MenuItem>
        </Select>

    )
}