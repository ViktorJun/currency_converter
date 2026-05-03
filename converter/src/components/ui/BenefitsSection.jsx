import {cloneElement} from "react";

export function BenefitsSection({benefits, title}) {
    return (
        <div className='px-8 py-5 border-2 border-brand-bg flex flex-col justify-center gap-2'>
            <h1 className='pb-4 text-xl font-bold'>{title}</h1>
            {benefits.map((item, index) => (
                <div key={item.description}>
                    {index !== 0 ? <hr className="my-3 border-t-2 border-brand-bg"/> : null}
                    <div className='flex items-center gap-3'>
                        {cloneElement(item.icon, {
                            sx: {
                                color: 'var(--color-brand-primary)',
                            },
                        })}
                        {
                            item.subtitle ?
                                <div>
                                    <p className='font-bold'>{item.subtitle}</p>
                                    <p className='text-brand-text'>{item.description}</p>
                                </div>
                            : <p>{item.description}</p>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}