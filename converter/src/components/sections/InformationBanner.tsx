import { Link } from 'react-router';

export type informationBannerProps = {
	title: string;
	subtitle: string;
	nameBtn: string;
	image: string;
};

export function InformationBanner({
	title,
	subtitle,
	nameBtn,
	image,
}: informationBannerProps) {
	return (
		<div className="mx-auto max-w-[1536px] px-5 py-10 md:py-0">
			<div className="grid grid-cols-1 items-center gap-8 md:h-[400px] md:grid-cols-2 md:gap-x-5">
				<div className="flex flex-col items-center gap-7 text-center md:items-start md:text-left">
					<h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
					<h2 className="text-md max-w-[380px] text-gray-500 md:text-lg">
						{subtitle}
					</h2>
					<Link to="/converter" className="flex gap-3">
						<button className="rounded-md bg-blue-700 px-6 py-2 text-white md:px-10 md:py-3">
							{nameBtn}
						</button>
					</Link>
				</div>
				<img
					src={image}
					alt="card"
					className="mx-auto w-full max-w-[320px] object-contain md:max-w-[420px]"
				/>
			</div>
		</div>
	);
}
