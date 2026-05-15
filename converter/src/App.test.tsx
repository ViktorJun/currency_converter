import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App routing', () => {
	it('renders the not found page for unknown routes', async () => {
		window.history.pushState({}, '', '/some-missing-page');

		render(<App />);

		expect(
			await screen.findByText('Сторінку не знайдено')
		).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'На головну' })).toBeInTheDocument();
	});
});
