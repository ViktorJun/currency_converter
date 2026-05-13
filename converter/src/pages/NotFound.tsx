import imageNotFound from '../assets/image404.svg';
import {
	NotFoundSection,
	type NotFoundSectionProps,
} from '../components/sections/NotFoundSection';
import EastIcon from '@mui/icons-material/East';
import {
	LinkHint,
	type sectionLinkProps,
} from '../components/sections/LinkHint';

import CachedIcon from '@mui/icons-material/Cached';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';

const notFoundSectionInfo: NotFoundSectionProps = {
	statusCode: 404,
	title: 'Сторінку не знайдено',
	description:
		'На жаль, сторінка, яку ви шукаєте, не існує або була переміщена. Перевірте адресу або поверніться на головну.',
	titleBtn: 'На головну',
	image: imageNotFound,
	link: '/',
};
const titleSectionLink = 'Можливо, ви шукали:';
const sectionLink: sectionLinkProps[] = [
	{
		image: CachedIcon,
		title: 'Конвертер валют',
		arrow: EastIcon,
		link: '/converter',
	},
	{
		image: MenuIcon,
		title: 'Послуги',
		arrow: EastIcon,
		link: '/services',
	},
	{
		image: PhoneIcon,
		title: 'Контакти',
		arrow: EastIcon,
		link: '/contacts',
	},
	{
		image: HelpIcon,
		title: 'Задати питання',
		arrow: EastIcon,
		link: '/questions',
	},
];
export function NotFound() {
	return (
		<div>
			<NotFoundSection
				statusCode={notFoundSectionInfo.statusCode}
				title={notFoundSectionInfo.title}
				description={notFoundSectionInfo.description}
				titleBtn={notFoundSectionInfo.titleBtn}
				image={notFoundSectionInfo.image}
				link={notFoundSectionInfo.link}
			/>
			<LinkHint title={titleSectionLink} arrayLink={sectionLink} />
		</div>
	);
}
