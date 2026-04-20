import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';

export function SocialNetworks() {
    return (
        <div className='flex flex-row gap-4 content-center'>
            <a href="/"><img src={facebook} alt="facebook" className="w-4 h-4"/></a>
            <a href="/"><img src={instagram} alt="instagram" className="w-4 h-4"/></a>
            <a href="/"><img src={twitter} alt="twitter" className="w-4 h-4"/></a>
            <a href="/"><img src={youtube} alt="youtube" className="w-4 h-4"/></a>
        </div>
    )
}