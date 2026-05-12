import {
	FeatureCard,
	type FeatureCardProps,
} from '../components/ui/FeatureCard';
import {AdvertisingBanner} from "../components/sections/AdvertisingBanner";
import supportCommunication from '../assets/supportCommunication.svg';
import SmsIcon from '@mui/icons-material/Sms';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {QuestionsInfo} from "../components/sections/QuestionsInfo";

export function Questions() {
	const features: FeatureCardProps[] = [
		{
			icon: SmsIcon,
			title: 'Швидка відповідь',
			description: 'Оперативно відповідаємо на звернення клієнтів.',
			link: '/questions#questions-form',
		},
		{
			icon: VerifiedUserIcon,
			title: 'Надійна підтримка',
			description: 'Допомагаємо з питаннями щодо сервісу та операцій.',
			link: '/questions#questions-form',
		},
		{
			icon: AccessTimeIcon,
			title: 'Підтримка 24/7',
			description: 'Ми на зв\'язку у будь-який зручний для вас час.',
			link: '/questions#questions-form',
		},
	];
	const banner = {
		title: 'Маєте запитання?',
		description: 'Напишіть нам, і ми допоможемо розібратися з роботою сервісу',
		nameBtn: 'Надіслати питання',
		image: supportCommunication,
		link: '/questions#questions-form',
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
			<QuestionsInfo />
		</div>
	);
}
