import {Logo} from "./Logo.jsx";
import {Navigate} from "./Navigate.jsx";
import mobilePhone from '../assets/mobilePhone.svg';
import phone from '../assets/phone.svg';
import {SocialNetworks} from "./footerComponents/SocialNetworks.jsx";
import {MobileNumbers} from "./footerComponents/MobileNumbers.jsx";

export function Footer() {
    return (
        <div className='flex justify-center gap-x-25 py-15 bg-gray-100'>
            <div className='w-54 flex flex-col gap-5'>
                <Logo />
                <h2 className='text-gray-500 text-xs'>04128, м.Київ, вул. Хрещатик, 19
                    Ліцензія НБУ №156
                    Ⓒ ПАТ ЧіпЧендж, 2019-2023</h2>
            </div>
            <div className='flex flex-col text-md gap-5 '>
                <Navigate link={'services'} name={'Послуги'}/>
                <Navigate link={'converter'} name={'Конвертер валют'}/>
                <Navigate link={'contacts'} name={'Контакти'}/>
                <Navigate link={'questions'} name={'Задати питання'}/>
            </div>
            <MobileNumbers phoneImage={mobilePhone} number={'3773'} subtitle={'Цілодобова підтримка'}/>
            <MobileNumbers phoneImage={phone} number={'8 800 111 22 33'} subtitle={'Безкожтовно для дзвінків в межах України'}/>
            <SocialNetworks />
        </div>
    )
}