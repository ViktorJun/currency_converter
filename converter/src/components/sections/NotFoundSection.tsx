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
		<div className="mx-auto flex max-w-[1536px] flex-row items-center justify-center gap-8">
			<div className="flex max-w-[800px] flex-col gap-3">
				<h1 className="text-brand-primary text-[140px] font-bold">
					{statusCode}
				</h1>
				<h2 className="text-[50px] font-bold">{title}</h2>
				<p className="text-brand-text text-[25px]">{description}</p>
				<Link to={link} className="mt-4 flex gap-3">
					<button className="bg-brand-primary text-brand-white rounded-md px-6 py-2 text-[20px] md:px-10 md:py-3">
						{titleBtn}
					</button>
				</Link>
			</div>
			<img src={image} alt="Image Not Found" className="max-w-[600px]" />
		</div>
	);
}
