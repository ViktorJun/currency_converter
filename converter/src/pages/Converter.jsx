import {AdvertisingBanner} from "../components/AdvertisingBanner.jsx";
import {CurrencyConverter} from "../components/currencyConverterComponentsLogic/CurrencyConverter.jsx";
import {HistoryConverter} from "../components/HistoryConverter.jsx";

export function Converter() {
    return (
        <div>
            <AdvertisingBanner />
            <CurrencyConverter />
            <HistoryConverter />
        </div>
    )
}