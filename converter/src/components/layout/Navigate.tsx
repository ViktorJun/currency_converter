import { NavLink } from 'react-router';
import { twMerge } from 'tailwind-merge';

type navigateFeatures = {
	link: string;
	title: string;
};

const features: navigateFeatures[] = [
	{
		link: '/services',
		title: 'Послуги',
	},
	{
		link: '/converter',
		title: 'Конвертер валют',
	},
	{
		link: '/contacts',
		title: 'Контакти',
	},
	{
		link: '/questions',
		title: 'Задати питання',
	},
];
type NavigateProps = {
	className?: string;
	onLinkClick?: () => void;
};

export function Navigate({ className, onLinkClick }: NavigateProps) {
	return (
		<div className={twMerge('flex', className)}>
			{features.map((item) => (
				<NavLink
					key={item.title}
					to={item.link}
					onClick={onLinkClick}
					className={({ isActive }) =>
						isActive ? 'text-brand-primary' : 'text-brand-text'
					}
				>
					{item.title}
				</NavLink>
			))}
		</div>
	);
}
