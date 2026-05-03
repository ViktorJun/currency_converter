import {AdvertisingBanner} from "../components/sections/AdvertisingBanner.jsx";
import {InformationBanner} from "../components/sections/InformationBanner.jsx";
import card from '../assets/standard-mastercard-card-debit_1280x720 2.svg';

export function Home(){
    const banner = {
        title: 'Чіп Чендж',
        description: 'Обмінник валют - навчальний',
        nameBtn: 'Конвертер валют',
        image: card,
        link: '/converter',
        styleImage: 'max-h-[215]',
    }
    return (
        <>
            <AdvertisingBanner
                title={banner.title}
                description={banner.description}
                nameBtn={banner.nameBtn}
                image={banner.image}
                link={banner.link}
            />
            <InformationBanner />
        </>
    )
}