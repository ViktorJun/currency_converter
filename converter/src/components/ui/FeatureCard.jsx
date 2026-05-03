import {cloneElement} from 'react';
import {Link} from "react-router";
export function FeatureCard({icon, title, subtitle, description, link}) {
    return (
        <Link to={link}>
            <div className="flex justify-center items-center max-w-[500px] px-8 py-5 bg-brand-bg rounded-md gap-4">
                {cloneElement(icon, {
                    sx: {
                        fontSize: 80,
                        color: 'var(--color-brand-primary)',
                    },
                })}
                <div>
                    <h1 className='font-bold text-xl'>{title}</h1>
                    {
                        subtitle ?
                            <p className='text-brand-text font-bold'>{subtitle}</p>
                            : null
                    }
                    <p className='text-brand-text'>{description}</p>
                </div>
            </div>
        </Link>
    )
}