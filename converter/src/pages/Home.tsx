import {
	AdvertisingBanner,
	type AdvertisingBannerProps,
} from '../components/sections/AdvertisingBanner';
import {
	InformationBanner,
	informationBannerProps,
} from '../components/sections/InformationBanner';
import card from '../assets/standard-mastercard-card-debit_1280x720 2.svg';
import info from '../assets/info.svg';

const informationBanner: informationBannerProps = {
	title: 'Конвертер валют',
	subtitle:
		'Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.',
	nameBtn: 'Конвертувати валюту',
	image: info,
};
const advertisingBanner: AdvertisingBannerProps = {
	title: 'Чіп Чендж',
	description: 'Обмінник валют - навчальний',
	nameBtn: 'Конвертер валют',
	image: card,
	link: '/converter',
	styleImage: 'max-h-[215]',
};

export function Home() {
	return (
		<>
			<AdvertisingBanner
				title={advertisingBanner.title}
				description={advertisingBanner.description}
				nameBtn={advertisingBanner.nameBtn}
				image={advertisingBanner.image}
				link={advertisingBanner.link}
			/>
			<InformationBanner
				title={informationBanner.title}
				subtitle={informationBanner.subtitle}
				nameBtn={informationBanner.nameBtn}
				image={informationBanner.image}
			/>
		</>
	);
}
