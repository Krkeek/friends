import styles from './landingPage.module.css'
import Navbar from "../../navbar/navbar";
import email from '../../../assets/socialMediaIcons/email.png'
import facebook from '../../../assets/socialMediaIcons/facebook.png'
import instagram from '../../../assets/socialMediaIcons/instagram.png'
import telegram from '../../../assets/socialMediaIcons/telegram.png'
import mouse from '../../../assets/mouse.gif'

export default function LandingPage(){
    return(
        <>
            <div className={'PageSection'}>
                <Navbar />
                <p className={`${styles.title}`}>Connecting Minds, cultivating conversations and fostering Friendships</p>
                <div className={`${styles.socialMediaDiv}`}>
                    <svg className={styles.svgMobile}  xmlns="http://www.w3.org/2000/svg" width="38" height="2" viewBox="0 0 38 2" fill="none">
                        <path d="M-2.28882e-05 1L37.0135 1" stroke="black" strokeWidth="2"/>
                    </svg>
                    <img className={`${styles.imgMargin}`} src={email} width={'25px'} alt={'social'} />
                    <img className={`${styles.imgMargin}`} src={facebook} width={'25px'} alt={'social'} />
                    <img className={`${styles.imgMargin}`} src={instagram} width={'25px'} alt={'social'} />
                    <img className={`${styles.imgMargin}`} src={telegram} width={'25px'} alt={'social'} />
                    <svg className={styles.svgMobile} xmlns="http://www.w3.org/2000/svg" width="38" height="2" viewBox="0 0 38 2" fill="none">
                        <path d="M-2.28882e-05 1L37.0135 1" stroke="black" strokeWidth="2"/>
                    </svg>
                </div>
                <div className={`${styles.mouseCol}`}>
                    <img className={`${styles.mouse}`} src={mouse} width={'300px'} alt={'mouse'} />
                </div>

            </div>

        </>
    );
}