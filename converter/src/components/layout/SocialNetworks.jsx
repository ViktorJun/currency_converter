import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';

export function SocialNetworks() {
	return (
		<div className="flex flex-col content-center gap-4 md:flex-row">
			<a href="/converter/public">
				<img
					src={facebook}
					alt="facebook"
					className="min-h-4 max-w-4"
				/>
			</a>
			<a href="/converter/public">
				<img src={instagram} alt="instagram" className="h-4 max-w-4" />
			</a>
			<a href="/converter/public">
				<img src={twitter} alt="twitter" className="h-4 max-w-4" />
			</a>
			<a href="/converter/public">
				<img src={youtube} alt="youtube" className="h-4 max-w-4" />
			</a>
		</div>
	);
}
