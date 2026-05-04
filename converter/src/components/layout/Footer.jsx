import { Logo } from './Logo.jsx';
import { Navigate } from './Navigate.jsx';
import mobilePhone from '../../assets/mobilePhone.svg';
import phone from '../../assets/phone.svg';
import { SocialNetworks } from './SocialNetworks.jsx';
import { MobileNumbers } from './MobileNumbers.jsx';

export function Footer() {
	return (
		<div className="bg-brand-bg px-3 py-15 md:px-6 lg:px-8">
			<div className="mx-auto grid max-w-[1536px] grid-cols-5 justify-items-center gap-6">
				<div className="flex max-w-54 flex-col gap-5">
					<Logo />
					<h2 className="text-xs text-gray-500">
						04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ
						ЧіпЧендж, 2019-2023
					</h2>
				</div>
				<Navigate className="text-md flex-col gap-5" />
				<MobileNumbers
					phoneImage={mobilePhone}
					number={'3773'}
					subtitle={'Цілодобова підтримка'}
				/>
				<MobileNumbers
					phoneImage={phone}
					number={'8 800 111 22 33'}
					subtitle={'Безкожтовно для дзвінків в межах України'}
				/>
				<SocialNetworks />
			</div>
		</div>
	);
}
