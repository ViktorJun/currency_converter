import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToHash() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location]);

	return null;
}
