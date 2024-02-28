import styles from './welcomePage.module.css'
import logo from '../../assets/logo.png'
import arrowRight from '../../assets/arrowRight.png'
import {Link} from "react-router-dom";
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import {useRef} from "react";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const WelcomePage = ()=> {

    const animationScope = useRef();


    useGSAP(()=>{
        gsap.timeline()
            .fromTo(".bgImgAnimation",{opacity: 0},{opacity:1, duration:0.5})
            .fromTo(".logoAnimation",{opacity: 0, yPercent: 30},{opacity:1, duration:1, yPercent:0})
            .to('.descriptionAnimation', {
                duration: 3,
                text: {
                    value: "Join us at FRIENDS, where we cultivate a vibrant community through engaging weekly meetings on thought-provoking topics, fostering meaningful connections and enriching your university experience",
                },})
            .fromTo('.buttonAnimation',{opacity: 0},{opacity:1, duration:0.5})
    },{scope: animationScope })

    return(
        <div ref={animationScope}>
            <div className={`${styles.Container} bgImgAnimation`}>
                <div className={`${styles.Section} `}>
                    <div className={`${styles.LogoDiv}`}>
                        <img className={'logoAnimation'} src={`${logo}`} alt={'logo'} />

                    </div>
                    <div className={`${styles.DescriptionDiv} descriptionAnimation`}>
                    </div>
                    <Link className={`${styles.EventLink} buttonAnimation`} to={'/homePage'}>Events<img className={`${styles.arrow}`} src={`${arrowRight}`} alt={'arrowRight'} /></Link>

                </div>

            </div>
        </div>
    );
}
export default WelcomePage