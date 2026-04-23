import { Link } from "react-router";
import vector from "../assets/Vector.svg";
import {Logo} from "./Logo.jsx";
import {Navigate} from "./Navigate.jsx";


export function Header() {
    return (
        <nav className='bg-brand-bg w-full'>
            <div className='x-auto max-w-[100%] px-4 lg:px-12 xl:px-16 flex items-center justify-between py-4'>
                <div className='flex items-center gap-6 md:gap-10 xl:gap-14'>
                    <Logo />
                    <Navigate className='flex gap-6 lg:gap-10 text-sm lg:text-md'/>
                </div>
                <Link to="/account" className='flex items-center gap-3 text-sm lg:text-md'>
                    <img src={vector} alt="vector"/>
                    Особистий кабінет
                </Link>
            </div>
        </nav>
    )
}