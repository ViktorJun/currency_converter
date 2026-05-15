import { useForm } from 'react-hook-form';
import {
	QuestionsFormValues,
	formQuestionsSchema,
} from '../../schemas/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../ui/FormInput';
import { FormSelect } from '../ui/FormSelect';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

export type QuestionFieldConfig = {
	name: keyof QuestionsFormValues;
	label: string;
	type: 'input' | 'textarea' | 'select';
	placeholder?: string;
	arrayProblems?: string[];
};

type QuestionsFormProps = {
	formComponents: QuestionFieldConfig[];
	title: string;
};

export function QuestionsForm({ formComponents, title }: QuestionsFormProps) {
	const [checked, setChecked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const { control, handleSubmit, reset } = useForm<QuestionsFormValues>({
		resolver: zodResolver(formQuestionsSchema),
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			theme: '',
			message: '',
		},
	});
	const onSubmit = async (data: QuestionsFormValues) => {
		try {
			setIsLoading(true);
			setIsSuccess(false);
			setErrorMessage('');
			const response = await fetch('http://localhost:3001/questions', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			if (!response.ok) {
				throw new Error('Не вдалося надіслати форму');
			}
			reset();
			setIsSuccess(true);
			const result = await response.json();
			console.log(result);
		} catch (error) {
			setErrorMessage(
				error instanceof Error ? error.message : 'Сталася помилка'
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form
			className="border-brand-bg flex h-full flex-col gap-4 border-2 px-6 py-5 md:px-8"
			onSubmit={handleSubmit(onSubmit)}
			id="questions-form"
		>
			<h1 className="pb-4 text-xl font-bold">{title}</h1>
			{formComponents.map((item) => {
				return (
					<div className="w-full" key={item.name}>
						<div className="grid w-full grid-cols-1 gap-2 md:grid-cols-[200px_1fr] md:items-start">
							<label>{item.label}</label>
							{item.type !== 'select' ? (
								<FormInput
									name={item.name}
									control={control}
									placeholder={item.placeholder}
									multiline={item.type === 'textarea'}
									rows={
										item.type === 'textarea' ? 2 : undefined
									}
								/>
							) : (
								<FormSelect
									name={item.name}
									control={control}
									placeholder={item.placeholder}
									arrayItem={item.arrayProblems}
								/>
							)}
						</div>
					</div>
				);
			})}
			<FormControlLabel
				control={
					<Checkbox
						onChange={(event) => setChecked(event.target.checked)}
					/>
				}
				label="Я погоджуюсь на обробку персональних даних"
				className="mt-4"
			/>
			<button
				className={`rounded-md px-6 py-2 md:px-10 md:py-3 ${checked ? 'bg-brand-primary text-white' : 'cursor-not-allowed bg-gray-200'}`}
				disabled={!checked || isLoading}
			>
				{isLoading ? 'Завантаження...' : 'Надіслати'}
			</button>
			{errorMessage && (
				<span className="text-red-500">{errorMessage}</span>
			)}
		</form>
	);
}
