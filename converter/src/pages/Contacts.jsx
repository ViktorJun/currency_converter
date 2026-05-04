import { FeatureCard } from '../components/ui/FeatureCard.jsx';
import { AdvertisingBanner } from '../components/sections/AdvertisingBanner.jsx';
import { ContactsInfo } from '../components/sections/ContactsInfo.jsx';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import contactSupport from '../assets/contactSupport.svg';

export function Contacts() {
	const features = [
		{
			icon: <PhoneAndroidIcon />,
			title: 'Телефон',
			subtitle: '3773 або 8 800 111 22 33',
			description: 'Цілодобова підтримка клієнтів.',
			link: '/contacts#contactInfo',
		},
		{
			icon: <LocationOnIcon />,
			title: 'Адреса',
			subtitle: '04128, м. Київ, вул. Хрещатик, 19',
			description: 'Головний офіс компанії.',
			link: '/contacts#contactInfo',
		},
		{
			icon: <SupportAgentIcon />,
			title: 'Підтримка',
			subtitle: 'support@chipchange.ua',
			description: 'Відповідаємо на запити онлайн.',
			link: '/contacts#contactInfo',
		},
	];
	const banner = {
		title: 'Наші контакти',
		description: 'Звʼяжіться з нами зручним способом',
		nameBtn: 'Задати питання',
		image: contactSupport,
		link: '/contacts#contactInfo',
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
			<div
				className="mx-auto grid max-w-[1536px] grid-cols-3 grid-rows-1 justify-items-center gap-3 px-2 py-10"
				id="contactInfo"
			>
				{features.map((feature) => (
					<FeatureCard
						key={feature.title}
						icon={feature.icon}
						title={feature.title}
						subtitle={feature.subtitle}
						description={feature.description}
						link={feature.link}
					/>
				))}
			</div>
			<ContactsInfo />
		</div>
	);
}
