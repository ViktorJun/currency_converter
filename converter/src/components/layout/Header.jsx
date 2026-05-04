import { Link } from 'react-router';
import vector from '../../assets/Vector.svg';
import { Logo } from './Logo.jsx';
import { Navigate } from './Navigate.jsx';

export function Header() {
  return (
    <nav className="bg-brand-bg w-full">
      <div className="x-auto flex max-w-[100%] items-center justify-between px-4 py-4 lg:px-12 xl:px-16">
        <div className="flex items-center gap-6 md:gap-10 xl:gap-14">
          <Logo />
          <Navigate className="lg:text-md flex gap-6 text-sm lg:gap-10" />
        </div>
        <Link
          to="/account"
          className="lg:text-md flex items-center gap-3 text-sm"
        >
          <img src={vector} alt="vector" />
          Особистий кабінет
        </Link>
      </div>
    </nav>
  );
}
