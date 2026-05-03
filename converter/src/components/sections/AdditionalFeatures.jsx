import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SmsIcon from '@mui/icons-material/Sms';
import {cloneElement} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from "react-router";
export function AdditionalFeatures() {
    const serviceActions = [
        {
            icon: <QueryStatsIcon />,
            title: 'Перегляд курсів',
            description: 'Відстежуйте актуальні курси валют у режимі реального часу.',
            link: '/converter#converter'
        },
        {
            icon: <SmsIcon />,
            title: 'Запит до підтримки',
            description: 'Напишіть нам і отримайте швидку відповідь від нашої команди.',
            link: '/questions'
        }
    ]
    return (
        <div className='flex flex-col gap-3 px-8 py-5 border-2 border-brand-bg'>
            <h1 className='font-bold text-xl'>Додаткові можливості</h1>
            {serviceActions.map((item, index) => (
                <div key={item.title}>
                    {index !== 0 ? <hr className="my-3 border-t-2 border-brand-bg"/> : null}
                    <Link to={item.link}>
                        <div className='flex gap-3 items-center'>
                            {cloneElement(item.icon, {
                                sx: {
                                    fontSize: 60,
                                    color: 'var(--color-brand-primary)',
                                },
                            })}
                            <div>
                                <h1 className='font-bold text-lg'>{item.title}</h1>
                                <p className='text-brand-text'>{item.description}</p>
                            </div>
                            <ArrowForwardIosIcon sx={{ marginLeft: 'auto' }}/>
                        </div>
                    </Link>
                </div>
            ))}
            <Link to="/questions" className='mt-3'>
                <button className='bg-blue-700 px-6 py-2 md:px-10 md:py-3 rounded-md text-white'>Задати питання</button>
            </Link>
        </div>
    )
}