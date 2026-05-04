import { AdvertisingBanner } from '../components/sections/AdvertisingBanner.jsx';
import { CurrencyConverter } from '../components/sections/CurrencyConverter.jsx';
import { HistoryConverter } from '../components/sections/HistoryConverter.jsx';
import card from '../assets/standard-mastercard-card-debit_1280x720 2.svg';

export function Converter() {
  const banner = {
    title: 'Чіп Чендж',
    description: 'Обмінник валют - навчальний',
    nameBtn: 'Конвертер валют',
    image: card,
    link: '/converter',
    styleImage: 'max-h-[215]',
  };
  return (
    <div>
      <AdvertisingBanner
        title={banner.title}
        description={banner.description}
        nameBtn={banner.nameBtn}
        image={banner.image}
        link={banner.link}
      />
      <CurrencyConverter />
      <HistoryConverter />
    </div>
  );
}
