import { Benefit, BenefitsSection } from '../ui/BenefitsSection';
import CachedIcon from '@mui/icons-material/Cached';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HistoryIcon from '@mui/icons-material/History';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { QuestionFieldConfig, QuestionsForm } from './QuestionsForm';
import { questionsSelectProblems } from '../../constants/Variables';

export function QuestionsInfo() {
	const titleBenefits: string = 'Популярні питання';
	const titleForm: string = 'Форма звернення';
	const benefits: Benefit[] = [
		{
			description: 'Як працює конвертер валют?',
			icon: CachedIcon,
		},
		{
			description: 'Як зберегти результат конвертації?',
			icon: BookmarkBorderIcon,
		},
		{
			description: 'Де переглянути історію операцій?',
			icon: HistoryIcon,
		},
		{
			description: 'Як звʼязатися з підтримкою?',
			icon: SupportAgentIcon,
		},
	];
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
	return (
		<div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-6 px-4 py-5 md:grid-cols-2 md:gap-8">
			<BenefitsSection benefits={benefits} title={titleBenefits} />
			<QuestionsForm formComponents={formComponents} title={titleForm} />
		</div>
	);
}
