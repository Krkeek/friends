import styles from './sideBar.module.css'
import logo from '../../../assets/logoBlack.png'
import homeIcon from '../../../assets/sideBarIcons/home.webp'
import eventsIcon from '../../../assets/sideBarIcons/events.webp'
import aboutUsIcon from '../../../assets/sideBarIcons/aboutus.webp'
import connectIcon from '../../../assets/sideBarIcons/connect.webp'
import facebookIcon from '../../../assets/sideBarSocialMedia/facebook.webp'
import instagramIcon from '../../../assets/sideBarSocialMedia/instagram.webp'
import telegramIcon from '../../../assets/sideBarSocialMedia/telegram.webp'

import {Link} from "react-router-dom";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useRef} from "react";


const SideBar = (props)=> {
    const animationRef = useRef();

    useGSAP(()=>{

        gsap.timeline()
            .fromTo('.containerAnimation',{x:"-50vw"},{x:0, duration:1})
            .fromTo('.navElementAnimation',{yPercent:-50, opacity:0},{yPercent:0,opacity:1, stagger:0.5, duration:0.5},'=-0.5')
            .fromTo('.followUsAnimation',{opacity: 0},{opacity:1},"=-0.7")
            .fromTo('.socialAnimation',{opacity: 0, yPercent: -50},{opacity:1, yPercent:0},'=-0.5')

    },{scope: animationRef})


    const handleClick = (navRoute)=> {
        props.setOnFocusSectionFn(navRoute);
    }

    return(
        <div ref={animationRef}>
            <div className={`${styles.Container} containerAnimation`}>
                <div className={`${styles.LogoDiv}`}>
                    <img src={`${logo}`} alt={'logo'} />
                </div>
                <div className={`${styles.NavElementsDiv}`}>
                    <Link  className={`${styles.NavElement} navElementAnimation`} to={'/welcomePage'}><img src={`${homeIcon}`} alt={'icon'}/><div className={`${styles.elementNames}`}>Home</div></Link>
                    <button onClick={()=> handleClick('EVENTS')}  className={`${styles.NavElement} navElementAnimation ${props.onFocusSection === 'EVENTS' && styles.ActiveNavElement}`}><img className={`${``}`} src={`${eventsIcon}`} alt={'icon'}/><div className={`${styles.elementNames}`}>Events</div></button>
                    <button onClick={()=> handleClick('ABOUTUS')}  className={`${styles.NavElement} navElementAnimation ${props.onFocusSection === 'ABOUTUS' && styles.ActiveNavElement}`}><img className={`${``}`} src={`${aboutUsIcon}`} alt={'icon'}/><div className={`${styles.elementNames}`}>About us</div></button>
                    <Link to={'mailto:info@tucfriends.com'} className={`${styles.NavElement} navElementAnimation`}><img className={`${``}`} src={`${connectIcon}`} alt={'icon'}/><div className={`${styles.elementNames}`}>Connect</div></Link>
                </div>
                <div className={`${styles.SocialMediaDiv}`}>
                    <p className={'followUsAnimation'}>Follow us</p>
                    <div className={`socialAnimation ${styles.socialMediaList}`}>
                        <Link  to={'https://www.facebook.com/friendsoftuchemnitz/?locale=de_DE'} target="_blank" rel="noopener noreferrer" ><img style={{width: '1.5rem'}} className={`${styles.socialMediaImg}`} src={`${facebookIcon}`} alt={'icon'} /></Link>
                        <Link  to={'https://www.instagram.com/tucfriends?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=='} target="_blank" rel="noopener noreferrer" ><img className={`${styles.socialMediaImg}`} src={`${instagramIcon}`} alt={'icon'} /></Link>
                        <Link  to={'https://t.me/+xbR2GLVQxfA5NDhi'} target="_blank" rel="noopener noreferrer" ><img className={`${styles.socialMediaImg}`} src={`${telegramIcon}`} alt={'icon'} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideBar