import { Link } from 'react-router';

export type NotFoundSectionProps = {
	statusCode: number;
	title: string;
	description: string;
	titleBtn: string;
	image: string;
	link: string;
};

export function NotFoundSection({
	statusCode,
	title,
	description,
	titleBtn,
	image,
	link,
}: NotFoundSectionProps) {
	return (
		<div className="mx-auto flex max-w-[1536px] flex-col gap-8 px-4 py-10 text-center md:flex-row md:items-center md:justify-center md:text-left">
			<div className="flex max-w-[800px] flex-col gap-3">
				<h1 className="text-brand-primary text-7xl font-bold md:text-[140px]">
					{statusCode}
				</h1>
				<h2 className="text-3xl font-bold md:text-[50px]">{title}</h2>
				<p className="text-brand-text text-base md:text-[25px]">
					{description}
				</p>
				<Link
					to={link}
					className="mt-4 flex justify-center gap-3 md:justify-start"
				>
					<button className="bg-brand-primary text-brand-white rounded-md px-6 py-2 text-[20px] md:px-10 md:py-3">
						{titleBtn}
					</button>
				</Link>
			</div>
			<img
				src={image}
				alt="Image Not Found"
				className="mx-auto hidden w-full max-w-[320px] object-contain md:block md:max-w-[600px]"
			/>
		</div>
	);
}
