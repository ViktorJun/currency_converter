import { NavLink } from "react-router";
import { twMerge } from 'tailwind-merge';

export function Navigate({className}) {
    return (
    <div className={twMerge('flex', className)}>
        <NavLink to='/services' className={({ isActive }) => isActive ? "text-brand-primary" : "text-brand-text"}>Послуги</NavLink>
        <NavLink to='/converter' className={({ isActive }) => isActive ? "text-brand-primary" : "text-brand-text"}>Конвертер валют</NavLink>
        <NavLink to='/contacts' className={({ isActive }) => isActive ? "text-brand-primary" : "text-brand-text"}>Контакти</NavLink>
        <NavLink to='/questions' className={({ isActive }) => isActive ? "text-brand-primary" : "text-brand-text"}>Задати питання</NavLink>
    </div>
    )
}