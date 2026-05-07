import {
	AdvertisingBanner,
	type AdvertisingBannerProps,
} from '../components/sections/AdvertisingBanner';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HistoryIcon from '@mui/icons-material/History';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
	FeatureCard,
	type FeatureCardProps,
} from '../components/ui/FeatureCard';
import { ServiceInfo } from '../components/sections/ServiceInfo';
import converterImage from '../assets/currencyConverter.svg';

export function Services() {
	const features: FeatureCardProps[] = [
		{
			icon: CurrencyExchangeIcon,
			title: 'Обмін валют',
			description: 'Швидкий розрахунок суми між популярними валютами.',
			link: '/converter#converter',
		},
		{
			icon: HistoryIcon,
			title: 'Історія операцій',
			description:
				'Зберігайте результати конвертації для подальшого перегляду.',
			link: '/converter#history',
		},
		{
			icon: SupportAgentIcon,
			title: 'Підтримка клієнтів',
			description: 'Отримуйте відповіді на запитання у зручний спосіб.',
			link: '/questions',
		},
	];
	const banner: AdvertisingBannerProps = {
		title: 'Наші послуги',
		description:
			'Зручні інструменти для обміну валют і керування операціями',
		nameBtn: 'Конвертер валют',
		image: converterImage,
		link: '/converter',
		styleImage: 'w-full max-h-[390px]',
	};
	return (
		<div>
			<AdvertisingBanner
				title={banner.title}
				description={banner.description}
				nameBtn={banner.nameBtn}
				image={banner.image}
				link={banner.link}
				styleImage={banner.styleImage}
			/>
			<div className="mx-auto grid max-w-[1536px] grid-cols-3 grid-rows-1 justify-items-center gap-3 px-2 py-10">
				{features.map((feature) => (
					<FeatureCard
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
	);
}
