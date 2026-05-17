import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { questionsSelectProblems } from '../../constants/Variables';
import { QuestionsForm, type QuestionFieldConfig } from './QuestionsForm';

const formComponents: QuestionFieldConfig[] = [
	{
		name: 'name',
		label: 'Імʼя',
		type: 'input',
		placeholder: 'Ваше імʼя',
	},
	{
		name: 'email',
		label: 'Email',
		type: 'input',
		placeholder: 'example@gmail.com',
	},
	{
		name: 'theme',
		label: 'Тема',
		type: 'select',
		placeholder: 'Оберіть тему',
		arrayProblems: questionsSelectProblems,
	},
	{
		name: 'message',
		label: 'Повідомлення',
		type: 'textarea',
		placeholder: 'Опишіть ваше запитання...',
	},
];

describe('QuestionsForm', () => {
	it('keeps submit disabled until agreement is checked', async () => {
		const user = userEvent.setup();

		render(
			<QuestionsForm
				formComponents={formComponents}
				title="Форма звернення"
			/>
		);

		const submitButton = screen.getByRole('button', {
			name: 'Надіслати',
		});

		expect(submitButton).toBeDisabled();

		await user.click(screen.getByRole('checkbox'));

		expect(submitButton).toBeEnabled();
	});

	it('shows validation errors on empty submit', async () => {
		const user = userEvent.setup();

		render(
			<QuestionsForm
				formComponents={formComponents}
				title="Форма звернення"
			/>
		);

		await user.click(screen.getByRole('checkbox'));
		await user.click(screen.getByRole('button', { name: 'Надіслати' }));

		expect(await screen.findAllByText("Введіть ім'я")).not.toHaveLength(0);
		expect(screen.getByText('Введіть коректний Email')).toBeInTheDocument();
		expect(screen.getByText('Оберіть тему звернення')).toBeInTheDocument();
		expect(
			screen.getByText('Опишіть вашу проблему, мінімум 5 символів')
		).toBeInTheDocument();
	});

	it('submits valid data and resets the fields', async () => {
		const user = userEvent.setup();
		const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
			new Response(JSON.stringify({ id: 1 }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			})
		);
		render(
			<QuestionsForm
				formComponents={formComponents}
				title="Форма звернення"
			/>
		);

		await user.type(
			screen.getByPlaceholderText('Ваше імʼя'),
			'Viktor'
		);
		await user.type(
			screen.getByPlaceholderText('example@gmail.com'),
			'test@example.com'
		);
		await user.click(screen.getByRole('combobox'));
		await user.click(
			await screen.findByRole('option', {
				name: questionsSelectProblems[0],
			})
		);
		await user.type(
			screen.getByPlaceholderText('Опишіть ваше запитання...'),
			'Потрібна допомога з конвертацією'
		);
		await user.click(screen.getByRole('checkbox'));
		await user.click(screen.getByRole('button', { name: 'Надіслати' }));

		await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

		expect(fetchMock).toHaveBeenCalledWith(
			'/api/questions',
		expect.objectContaining({
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: 'Viktor',
					email: 'test@example.com',
					theme: questionsSelectProblems[0],
					message: 'Потрібна допомога з конвертацією',
				}),
			})
		);

		await waitFor(() => {
			expect(screen.getByPlaceholderText('Ваше імʼя')).toHaveValue('');
			expect(
				screen.getByPlaceholderText('example@gmail.com')
			).toHaveValue('');
			expect(
				screen.getByPlaceholderText('Опишіть ваше запитання...')
			).toHaveValue('');
		});
	});
});
