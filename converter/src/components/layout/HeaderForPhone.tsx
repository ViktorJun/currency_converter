import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from './Logo';
import { Navigate } from './Navigate';

export function HeaderForPhone() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="bg-brand-bg relative w-full md:hidden">
			<div className="mx-auto max-w-[1536px] px-4 py-4">
				<div className="flex items-center justify-between gap-4">
					<Logo />
					<button
						type="button"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
						aria-expanded={isOpen}
						className="text-brand-text"
					>
						{isOpen ? (
							<CloseIcon sx={{ fontSize: 28 }} />
						) : (
							<MenuIcon sx={{ fontSize: 28 }} />
						)}
					</button>
				</div>
				{isOpen ? (
					<div className="border-brand-text bg-brand-bg absolute top-full left-0 z-50 w-full border-t px-4 py-4">
						<Navigate
							className="flex flex-col gap-4 text-base"
							onLinkClick={() => setIsOpen(false)}
						/>
					</div>
				) : null}
			</div>
		</nav>
	);
}
