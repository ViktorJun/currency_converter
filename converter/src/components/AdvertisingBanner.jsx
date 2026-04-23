import {Link} from "react-router";
import card from '../assets/standard-mastercard-card-debit_1280x720 2.svg';

export function AdvertisingBanner() {
    return (
        <div className="h-[400px] bg-[url('/advertisingBg.svg')] bg-cover bg-no-repeat bg-center px-5">
            <div className='grid grid-cols-2 justify-items-center place-items-center max-w-[1536px] mx-auto h-full gap-x-5'>
                <div className="flex flex-col gap-5">
                    <h1 className='text-4xl text-white font-bold md:text-5xl'>Чіп Чендж</h1>
                    <h2 className='text-gray-100 text-lg md:text-xl'>Обмінник валют - навчальний</h2>
                    <Link to="/converter" className='flex gap-3'>
                        <button className='bg-white py-2 px-6 rounded-md text-gray-500 md:px-10 md:py-3'>Конвертер валют</button>
                    </Link>
                </div>
                <img src={card} alt="card"/>
            </div>
        </div>
    )
}