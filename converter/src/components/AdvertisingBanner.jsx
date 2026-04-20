import {Link} from "react-router";
import card from '../assets/standard-mastercard-card-debit_1280x720 2.svg';
import background from '../assets/Rectangle.svg';

export function AdvertisingBanner() {
    return (
        <div
            className="h-100 flex items-center justify-center gap-x-53"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="flex flex-col gap-5">
                <h1 className='text-5xl text-white font-bold'>Чіп Чендж</h1>
                <h2 className='text-gray-100 text-xl'>Обмінник валют - навчальний</h2>
                <Link to="/converter" className='flex gap-3'><button className='bg-white py-3 px-10 rounded-md text-gray-500'>Конвертер валют</button></Link>
            </div>
            <img src={card} alt="card"/>
        </div>
    )
}