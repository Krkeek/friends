import styles from './sideBar.module.css'
import logo from '../../../assets/logoBlack.png'
import homeIcon from '../../../assets/sideBarIcons/home.png'
import eventsIcon from '../../../assets/sideBarIcons/events.png'
import aboutUsIcon from '../../../assets/sideBarIcons/aboutus.png'
import connectIcon from '../../../assets/sideBarIcons/connect.png'
import facebookIcon from '../../../assets/sideBarSocialMedia/facebook.png'
import instagramIcon from '../../../assets/sideBarSocialMedia/instagram.png'
import telegramIcon from '../../../assets/sideBarSocialMedia/telegram.png'

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
                    <Link  className={`${styles.NavElement} navElementAnimation`} to={'/welcomePage'}><img src={`${homeIcon}`} alt={'icon'}/>Home</Link>
                    <button onClick={()=> handleClick('EVENTS')}  className={`${styles.NavElement} navElementAnimation ${props.onFocusSection === 'EVENTS' && styles.ActiveNavElement}`}><img src={`${eventsIcon}`} alt={'icon'}/>Events</button>
                    <button onClick={()=> handleClick('ABOUTUS')}  className={`${styles.NavElement} navElementAnimation ${props.onFocusSection === 'ABOUTUS' && styles.ActiveNavElement}`}><img src={`${aboutUsIcon}`} alt={'icon'}/>About us</button>
                    <Link  to={'mailto:info@tucfriends.com'} className={`${styles.NavElement} navElementAnimation`}><img src={`${connectIcon}`} alt={'icon'}/>Connect</Link>
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