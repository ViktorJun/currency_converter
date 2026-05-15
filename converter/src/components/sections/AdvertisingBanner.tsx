import { Link } from 'react-router';

export type AdvertisingBannerProps = {
	title: string;
	description: string;
	nameBtn: string;
	image: string;
	link: string;
	styleImage?: string;
};

export function AdvertisingBanner({
	title,
	description,
	nameBtn,
	image,
	link,
	styleImage,
}: AdvertisingBannerProps) {
	return (
		<div className="bg-[url('/advertisingBg.svg')] bg-cover bg-center bg-no-repeat px-5 py-10 md:h-[400px] md:py-0">
			<div className="mx-auto grid max-w-[1536px] grid-cols-1 items-center gap-8 md:h-full md:grid-cols-2 md:gap-x-5">
				<div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
					<h1 className="text-4xl font-bold text-white md:text-5xl">
						{title}
					</h1>
					<h2 className="text-lg text-gray-100 md:text-xl">
						{description}
					</h2>
					<Link to={link} className="flex gap-3">
						<button className="rounded-md bg-white px-6 py-2 text-gray-500 md:px-10 md:py-3">
							{nameBtn}
						</button>
					</Link>
				</div>
				<img
					src={image}
					alt="card"
					className={
						styleImage ??
						'mx-auto w-full max-w-[320px] object-contain md:max-w-[420px]'
					}
				/>
			</div>
		</div>
	);
}
