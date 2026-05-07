import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';

type socialNetworksFeatures = {
	link: string;
	image: string;
	alt: string;
};

const features: socialNetworksFeatures[] = [
	{
		link: '/converter/public',
		image: facebook,
		alt: 'Facebook',
	},
	{
		link: '/converter/public',
		image: instagram,
		alt: 'Instagram',
	},
	{
		link: '/converter/public',
		image: twitter,
		alt: 'Twitter',
	},
	{
		link: '/converter/public',
		image: youtube,
		alt: 'Youtube',
	},
];

export function SocialNetworks() {
	return (
		<div className="flex flex-col content-center gap-4 md:flex-row">
			{features.map((item) => (
				<a href={item.link} key={item.alt}>
					<img
						src={item.image}
						alt={item.alt}
						className="min-h-4 max-w-4"
					/>
				</a>
			))}
		</div>
	);
}
