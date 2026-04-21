import {useCurrencyAmount} from '../store/useCurrencyAmount.jsx'

export function ListOfCurrencies({ value, onChange }) {
    const setAmount = useCurrencyAmount((state) => state.setAmount);
    return (
        <select value={value}
                onChange={(e) => {
                    onChange(e.target.value)
                    setAmount('toAmount', '')
                    setAmount('fromAmount', '')
                }}>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
        </select>
    )
}