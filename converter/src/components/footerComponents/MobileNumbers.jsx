export function MobileNumbers({phoneImage, number, subtitle}) {
    return (
        <div>
            <div className='flex flex-row gap-5'>
                <img src={phoneImage} alt="Phone" className='h-6 w-4'/>
                <a href={`tel:${number.split(' ').join('')}`}>{number}</a>
            </div>
            <h2 className='text-gray-500 ml-9 mt-1.5 text-xs'>{subtitle}</h2>
        </div>
    )
}