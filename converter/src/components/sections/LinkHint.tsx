import type { SvgIconComponent } from '@mui/icons-material';
import { Link } from 'react-router';

export type sectionLinkProps = {
	image: SvgIconComponent;
	title: string;
	arrow: SvgIconComponent;
	link: string;
};
type LinkHintProps = {
	title: string;
	arrayLink: sectionLinkProps[];
};

export function LinkHint({ title, arrayLink }: LinkHintProps) {
	return (
		<div className="flex flex-col gap-5 px-4 py-10">
			<h1 className="text-brand-text mx-auto text-lg md:text-[20px]">
				{title}
			</h1>
			<div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
				{arrayLink?.map((item) => {
					const ImageIcon = item.image;
					const ArrowIcon = item.arrow;
					return (
						<Link
							to={item.link}
							key={item.title}
							className="border-brand-bg flex items-center justify-between gap-4 rounded-md border-2 px-4 py-3"
						>
							<div className="flex items-center gap-3">
								<ImageIcon
									sx={{
										color: 'var(--color-brand-primary)',
										fontSize: '36px',
									}}
								/>
								<h1 className="text-base md:text-[20px]">
									{item.title}
								</h1>
							</div>
							<ArrowIcon
								sx={{
									fontSize: '24px',
									color: 'var(--color-brand-primary)',
								}}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
