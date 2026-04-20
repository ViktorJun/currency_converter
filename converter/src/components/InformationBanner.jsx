import info from "../assets/info.svg";
import {Link} from 'react-router';

export function InformationBanner() {
    return (
        <div className='h-140 flex items-center justify-center gap-x-12'>
            <div className="flex flex-col gap-7">
                <h1 className='text-4xl font-bold'>Конвертер валют</h1>
                <h2 className='text-gray-500 text-lg w-95'>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</h2>
                <Link to="/converter" className='flex gap-3'><button className='bg-blue-700 py-3 px-10 rounded-md text-white'>Конвертувати валюту</button></Link>
            </div>
            <img src={info} alt="card"/>

        </div>
    )
}