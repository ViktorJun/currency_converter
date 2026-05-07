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
		<Link to={link}>
			<div className="bg-brand-bg flex max-w-[500px] items-center justify-center gap-4 rounded-md px-8 py-5">
				<Icon
					sx={{
						fontSize: 80,
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
