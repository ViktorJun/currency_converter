import type { SvgIconComponent } from '@mui/icons-material';

export type Benefit = {
	description: string;
	icon: SvgIconComponent;
	subtitle?: string;
};

type BenefitsSectionProps = {
	benefits: Benefit[];
	title: string;
};
export function BenefitsSection({ benefits, title }: BenefitsSectionProps) {
	return (
		<div className="border-brand-bg flex h-full flex-col gap-2 border-2 px-6 py-5 md:px-8">
			<h1 className="pb-4 text-xl font-bold">{title}</h1>
			<div className="flex flex-1 flex-col divide-y-2 divide-[var(--color-brand-bg)]">
				{benefits.map((item) => {
					const Icon = item.icon;

					return (
						<div
							key={item.subtitle ?? item.description}
							className="flex items-start gap-3 py-3 md:flex-1 md:items-center"
						>
							<Icon
								sx={{ color: 'var(--color-brand-primary)' }}
							/>
							{item.subtitle ? (
								<div>
									<p className="font-bold">{item.subtitle}</p>
									<p className="text-brand-text">
										{item.description}
									</p>
								</div>
							) : (
								<p>{item.description}</p>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
