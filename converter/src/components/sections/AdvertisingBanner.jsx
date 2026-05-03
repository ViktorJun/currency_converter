import {Link} from "react-router";

export function AdvertisingBanner({title, description, nameBtn, image, link, styleImage}) {
    return (
        <div className="h-[400px] bg-[url('/advertisingBg.svg')] bg-cover bg-no-repeat bg-center px-5">
            <div className='grid grid-cols-2 justify-items-center place-items-center max-w-[1536px] mx-auto h-full gap-x-5'>
                <div className="flex flex-col gap-5">
                    <h1 className='text-4xl text-white font-bold md:text-5xl'>{title}</h1>
                    <h2 className='text-gray-100 text-lg md:text-xl'>{description}</h2>
                    <Link to={link} className='flex gap-3'>
                        <button className='bg-white py-2 px-6 rounded-md text-gray-500 md:px-10 md:py-3'>{nameBtn}</button>
                    </Link>
                </div>
                <img src={image} alt="card" className={styleImage} />
            </div>
        </div>
    )
}