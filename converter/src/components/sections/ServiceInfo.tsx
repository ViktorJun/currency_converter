import { BenefitsSection } from '../ui/BenefitsSection';
import { AdditionalFeatures } from './AdditionalFeatures';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { Benefit } from '../ui/BenefitsSection';

export function ServiceInfo() {
	const titleBenefitsSection: string = 'Чому обирають нас';
	const benefits: Benefit[] = [
		{
			description: 'Актуальні курси валют',
			icon: CheckCircleIcon,
		},
		{
			description: 'Зрозумілий інтерфейс',
			icon: CheckCircleIcon,
		},
		{
			description: 'Швидке збереження результатів',
			icon: CheckCircleIcon,
		},
		{
			description: 'Доступ до сервісу 24/7',
			icon: CheckCircleIcon,
		},
	];
	return (
		<div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-6 px-4 py-5 md:grid-cols-2 md:gap-8">
			<BenefitsSection benefits={benefits} title={titleBenefitsSection} />
			<AdditionalFeatures />
		</div>
	);
}
