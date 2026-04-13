import { Link } from "react-router";
import vector from "../../assets/Vector.svg";
import {Logo} from "../Logo.jsx";
import {Navigate} from "../Navigate.jsx";


export function Header() {
    return (
        <nav className='flex h-24 items-center justify-between px-24 bg-white'>
            <div className='flex items-center'>
                <Logo />
                <div className='flex gap-10 ml-20 text-md'>
                    <Navigate link={'services'} name={'Послуги'}/>
                    <Navigate link={'converter'} name={'Конвертер валют'}/>
                    <Navigate link={'contacts'} name={'Контакти'}/>
                    <Navigate link={'questions'} name={'Задати питання'}/>
                </div>
            </div>
            <Link to="/account" className='flex gap-3'> <img src={vector} alt="vector"/>Особистий кабінет</Link>
        </nav>
    )
}