import {
	AdvertisingBanner,
	type AdvertisingBannerProps,
} from '../components/sections/AdvertisingBanner';
import { CurrencyConverter } from '../components/sections/CurrencyConverter';
import { HistoryConverter } from '../components/sections/HistoryConverter';
import card from '../assets/standard-mastercard-card-debit_1280x720 2.svg';

export function Converter() {
	const banner: AdvertisingBannerProps = {
		title: 'Чіп Чендж',
		description: 'Обмінник валют - навчальний',
		nameBtn: 'Конвертер валют',
		image: card,
		link: '/converter',
		styleImage: 'max-h-[215]',
	};
	return (
		<div>
			<AdvertisingBanner
				title={banner.title}
				description={banner.description}
				nameBtn={banner.nameBtn}
				image={banner.image}
				link={banner.link}
			/>
			<CurrencyConverter />
			<HistoryConverter />
		</div>
	);
}
