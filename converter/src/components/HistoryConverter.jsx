import {useCurrencyExchangeRates} from "./store/useCurrencyExchangeRates.jsx";
import {useConverterHistory} from "./store/useConverterHistory.jsx";

export function HistoryConverter() {
    const data = useCurrencyExchangeRates((state) => state.currency);
    const history = useConverterHistory((state) => state.history);
    const deleteElement = useConverterHistory((state) => state.deleteElement);
    const clearHistory = useConverterHistory((state) => state.clearHistory);
    function checkNumberElements() {
        if (history.length === 0) return false;
        if (history.length > 10) {
            deleteElement()
        }
        return true;
    }
    return (
        <div>
            <h1>Історія конвертації</h1>
            <button type='click' onClick={clearHistory}>Очистити історію</button>
            {checkNumberElements() > 0 ? history.map((element, index) => {
                console.log(element);
                return (
                    <div key={index}>
                        <p>{element.date}</p>
                        <p>{element.fromAmount}</p>
                        <p>{element.fromCurrency}</p>
                        <p>{element.toAmount}</p>
                        <p>{element.toCurrency}</p>
                    </div>
                )
            }) : <p>Empty history</p>}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}