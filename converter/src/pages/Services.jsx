import {AdvertisingBanner} from "../components/AdvertisingBanner.jsx";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HistoryIcon from '@mui/icons-material/History';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {ServiceCard} from '../components/serviceComponents/ServiceCard.jsx';
import {ServiceInfo} from "../components/serviceComponents/ServiceInfo.jsx";

export function Services() {
    const features = [
        {
            icon: <CurrencyExchangeIcon />,
            title: 'Обмін валют',
            description: 'Швидкий розрахунок суми між популярними валютами.',
            link: '/converter#converter'
        },
        {
            icon: <HistoryIcon />,
            title: 'Історія операцій',
            description: 'Зберігайте результати конвертації для подальшого перегляду.',
            link: '/converter#history'
        },
        {
            icon: <SupportAgentIcon />,
            title: 'Підтримка клієнтів',
            description: 'Отримуйте відповіді на запитання у зручний спосіб.',
            link: '/questions'
        },
    ]
    return (
        <div>
            <AdvertisingBanner />
            <div className="grid grid-cols-3 grid-rows-1 justify-items-center py-10 px-2 gap-3 mx-auto max-w-[1536px]">
                {features.map((feature) => (
                    <ServiceCard
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        link={feature.link}
                    />
                ))}
            </div>
            <ServiceInfo />
        </div>
    )
}