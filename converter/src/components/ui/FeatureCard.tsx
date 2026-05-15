import { Link } from 'react-router';
import type { SvgIconComponent } from '@mui/icons-material';

export type FeatureCardProps = {
	icon: SvgIconComponent;
	title: string;
	subtitle?: string;
	description: string;
	link: string;
};
export function FeatureCard({
	icon,
	title,
	subtitle,
	description,
	link,
}: FeatureCardProps) {
	const Icon = icon;
	return (
		<Link to={link} className="w-full">
			<div className="bg-brand-bg flex w-full max-w-[500px] flex-col items-center gap-4 rounded-md px-6 py-5 text-center md:flex-row md:px-8 md:text-left">
				<Icon
					sx={{
						fontSize: 64,
						color: 'var(--color-brand-primary)',
					}}
				/>
				<div>
					<h1 className="text-xl font-bold">{title}</h1>
					{subtitle ? (
						<p className="text-brand-text font-bold">{subtitle}</p>
					) : null}
					<p className="text-brand-text">{description}</p>
				</div>
			</div>
		</Link>
	);
}
