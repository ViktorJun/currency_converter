import { Logo } from './Logo';
import { Navigate } from './Navigate';
import mobilePhone from '../../assets/mobilePhone.svg';
import phone from '../../assets/phone.svg';
import { SocialNetworks } from './SocialNetworks';
import { MobileNumbers, MobileNumbersProps } from './MobileNumbers';

const features: MobileNumbersProps[] = [
	{
		phoneImage: mobilePhone,
		number: '3773',
		subtitle: 'Цілодобова підтримка',
	},
	{
		phoneImage: phone,
		number: '8 800 111 22 33',
		subtitle: 'Безкожтовно для дзвінків в межах України',
	},
];

export function Footer() {
	return (
		<footer className="bg-brand-bg px-3 py-15 md:px-6 lg:px-8">
			<div className="mx-auto grid max-w-[1536px] grid-cols-1 justify-items-center gap-8 text-center sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:items-start lg:justify-items-start lg:text-left">
				<div className="flex flex-col items-center gap-5 lg:items-start">
					<Logo />
					<h2 className="max-w-[260px] text-xs text-gray-500">
						04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ
						ЧіпЧендж, 2019-2023
					</h2>
				</div>
				<div>
					<Navigate className="flex flex-col items-center gap-4 text-sm lg:items-start" />
				</div>
				<div className="flex flex-col items-center gap-4 lg:items-start">
					{features.map((item) => (
						<MobileNumbers
							key={item.number}
							phoneImage={item.phoneImage}
							number={item.number}
							subtitle={item.subtitle}
						/>
					))}
				</div>
				<div className="flex flex-col items-center gap-4 lg:items-start">
					<h2 className="text-brand-text text-sm font-semibold">
						Ми в соцмережах
					</h2>
					<SocialNetworks />
				</div>
			</div>
		</footer>
	);
}
