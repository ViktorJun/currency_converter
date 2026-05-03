import {Logo} from "./Logo.jsx";
import {Navigate} from "./Navigate.jsx";
import mobilePhone from '../../assets/mobilePhone.svg';
import phone from '../../assets/phone.svg';
import {SocialNetworks} from "./SocialNetworks.jsx";
import {MobileNumbers} from "./MobileNumbers.jsx";

export function Footer() {
    return (
        <div className='bg-brand-bg py-15 px-3 md:px-6 lg:px-8'>
            <div className='grid grid-cols-5 gap-6 justify-items-center max-w-[1536px] mx-auto'>
                <div className='max-w-54 flex flex-col gap-5'>
                    <Logo />
                    <h2 className='text-gray-500 text-xs'>04128, м.Київ, вул. Хрещатик, 19
                        Ліцензія НБУ №156
                        Ⓒ ПАТ ЧіпЧендж, 2019-2023</h2>
                </div>
                <Navigate className='flex-col text-md gap-5'/>
                <MobileNumbers phoneImage={mobilePhone} number={'3773'} subtitle={'Цілодобова підтримка'}/>
                <MobileNumbers phoneImage={phone} number={'8 800 111 22 33'} subtitle={'Безкожтовно для дзвінків в межах України'}/>
                <SocialNetworks />
            </div>
        </div>
    )
}