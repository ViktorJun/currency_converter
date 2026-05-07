import { BenefitsSection } from '../ui/BenefitsSection';
import type { Benefit } from '../ui/BenefitsSection';
import { FindUs } from './FindUs';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export function ContactsInfo() {
	const title: string = 'Контактна інформація';
	const benefits: Benefit[] = [
		{
			subtitle: '3773',
			description: 'Цілодобова підтримка',
			icon: PhoneAndroidIcon,
		},
		{
			subtitle: '8 800 111 22 33',
			description: 'Безкоштовно для дзвінків в межах України',
			icon: PhoneIcon,
		},
		{
			subtitle: 'support@chipchange.ua',
			description: 'Пошта для звернень',
			icon: EmailIcon,
		},
		{
			subtitle: 'Пн-Нд: 24/7',
			description: "Ми завжди на зв'язку",
			icon: AccessTimeIcon,
		},
	];
	return (
		<div className="mx-auto grid max-w-[1536px] grid-cols-2 gap-8 px-3 py-5">
			<BenefitsSection benefits={benefits} title={title} />
			<FindUs />
		</div>
	);
}
