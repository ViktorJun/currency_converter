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
		<div className="flex flex-col gap-5 px-2 py-10">
			<h1 className="text-brand-text mx-auto text-[20px]">{title}</h1>
			<div className="mx-auto grid max-w-[1536px] grid-cols-4 gap-8">
				{arrayLink?.map((item) => {
					const ImageIcon = item.image;
					const ArrowIcon = item.arrow;
					return (
						<Link
							to={item.link}
							key={item.title}
							className="border-brand-bg flex flex-row items-center justify-between gap-4 rounded-xl border-3 px-5 py-3"
						>
							<div className="flex flex-row items-center gap-3">
								<ImageIcon
									sx={{
										color: 'var(--color-brand-primary)',
										fontSize: '50px',
									}}
								/>
								<h1 className="text-[20px]">{item.title}</h1>
							</div>
							<ArrowIcon sx={{ fontSize: '30px' }} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
