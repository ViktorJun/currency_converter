import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function WhyChooseUs() {
    const benefits = [
        {description: 'Актуальні курси валют'},
        {description: 'Зрозумілий інтерфейс'},
        {description: 'Швидке збереження результатів'},
        {description: 'Доступ до сервісу 24/7'}
    ]
    return (
        <div className='px-8 py-5 border-2 border-brand-bg flex flex-col justify-center gap-2'>
            <h1 className='pb-4 text-xl font-bold'>Чому обирають нас</h1>
            {benefits.map((item, index) => (
                <div key={item.description}>
                    {index !== 0 ? <hr className="my-3 border-t-2 border-brand-bg"/> : null}
                    <div className='flex items-center gap-3'>
                        <CheckCircleIcon sx={{ color: 'var(--color-brand-primary)' }} />
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}