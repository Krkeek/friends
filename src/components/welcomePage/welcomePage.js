import styles from './welcomePage.module.css'
import logo from '../../assets/logo.png'
import arrowRight from '../../assets/arrowRight.png'
import {Link} from "react-router-dom";
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import {useRef} from "react";
import { TextPlugin } from "gsap/TextPlugin";
import {welcomePageAnimation} from "../../animations/welcomePage";
gsap.registerPlugin(TextPlugin);

const WelcomePage = ()=> {

    const animationScope = useRef();


    useGSAP(()=>{
        welcomePageAnimation();
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