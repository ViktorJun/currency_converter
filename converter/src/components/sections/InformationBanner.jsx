import info from '../../assets/info.svg';
import { Link } from 'react-router';

export function InformationBanner() {
	return (
		<div className="mx-auto max-w-[1536px] px-5">
			<div className="grid h-[560px] grid-cols-2 place-items-center justify-items-center gap-x-5">
				<div className="flex flex-col gap-7">
					<h1 className="text-3xl font-bold md:text-4xl">
						Конвертер валют
					</h1>
					<h2 className="text-md max-w-[380px] text-gray-500 md:text-lg">
						Переважна діяльність банківської групи за останні чотири
						звітні квартали становить 50 і більше відсотків.
					</h2>
					<Link to="/converter" className="flex gap-3">
						<button className="rounded-md bg-blue-700 px-6 py-2 text-white md:px-10 md:py-3">
							Конвертувати валюту
						</button>
					</Link>
				</div>
				<img src={info} alt="card" />
			</div>
		</div>
	);
}
