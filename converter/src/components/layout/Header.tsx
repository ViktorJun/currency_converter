import { Logo } from './Logo';
import { Navigate } from './Navigate';

export function Header() {
	return (
		<nav className="bg-brand-bg w-full">
			<div className="mx-auto hidden max-w-[1536px] items-center justify-between px-4 py-4 md:flex lg:px-12 xl:px-16">
				<Logo />
				<Navigate className="lg:text-md flex gap-6 text-sm lg:gap-10" />
			</div>
		</nav>
	);
}
