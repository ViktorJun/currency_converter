import {useCurrencyExchangeRates} from "./store/useCurrencyExchangeRates.jsx";

export function HistoryConverter() {
    const data = useCurrencyExchangeRates((state) => state.currency)
    return (
        <div>
            <h1>Історія конвертації</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}