import {Link} from 'react-router'
import logo from "../../assets/logo.svg";

export function Logo() {
    return (
        <Link to="/" className='flex gap-3'> <img src={logo} alt="logo" className='max-h-[28px] max-w-[23px]'/><h1 className='text-lg font-bold md:text-xl'>Чіп Чендж</h1></Link>
    )
}