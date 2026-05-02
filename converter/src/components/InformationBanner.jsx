import info from "../assets/info.svg";
import {Link} from 'react-router';

export function InformationBanner() {
    return (
        <div className='max-w-[1536px] mx-auto px-5'>
            <div className='h-[560px] grid grid-cols-2 justify-items-center place-items-center gap-x-5'>
                <div className="flex flex-col gap-7">
                    <h1 className='text-3xl font-bold md:text-4xl'>Конвертер валют</h1>
                    <h2 className='text-gray-500 text-md max-w-[380px] md:text-lg'>
                        Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.
                    </h2>
                    <Link to="/converter" className='flex gap-3'>
                        <button className='bg-blue-700 px-6 py-2 md:px-10 md:py-3 rounded-md text-white'>
                            Конвертувати валюту
                        </button>
                    </Link>
                </div>
                <img src={info} alt="card"/>
            </div>
        </div>
    )
}