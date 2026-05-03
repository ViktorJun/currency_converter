import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';

export function SocialNetworks() {
    return (
        <div className='flex flex-col gap-4 content-center md:flex-row'>
            <a href="/converter/public"><img src={facebook} alt="facebook" className="max-w-4 min-h-4"/></a>
            <a href="/converter/public"><img src={instagram} alt="instagram" className="max-w-4 h-4"/></a>
            <a href="/converter/public"><img src={twitter} alt="twitter" className="max-w-4 h-4"/></a>
            <a href="/converter/public"><img src={youtube} alt="youtube" className="max-w-4 h-4"/></a>
        </div>
    )
}