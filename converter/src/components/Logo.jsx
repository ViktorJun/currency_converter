import {Link} from 'react-router'
import logo from "../assets/logo.svg";

export function Logo() {
    return (
        <Link to="/home" className='flex gap-3'> <img src={logo} alt="logo"/><h1 className='text-xl font-bold'>Чіп Чендж</h1></Link>
    )
}