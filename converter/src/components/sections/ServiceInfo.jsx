import {BenefitsSection} from "../ui/BenefitsSection.jsx";
import {AdditionalFeatures} from "./AdditionalFeatures.jsx";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function ServiceInfo() {
    const titleBenefitsSection = 'Чому обирають нас';
    const benefits = [
        {
            description: 'Актуальні курси валют',
            icon: <CheckCircleIcon />,
        },
        {
            description: 'Зрозумілий інтерфейс',
            icon: <CheckCircleIcon />,
        },
        {
            description: 'Швидке збереження результатів',
            icon: <CheckCircleIcon />,
        },
        {
            description: 'Доступ до сервісу 24/7',
            icon: <CheckCircleIcon />,
        }
    ]
    return (
        <div className='px-3 py-5 grid grid-cols-2 gap-8 mx-auto max-w-[1536px]'>
            <BenefitsSection benefits={benefits} title={titleBenefitsSection}/>
            <AdditionalFeatures />
        </div>
    )
}