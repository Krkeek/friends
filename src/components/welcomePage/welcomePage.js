import styles from './welcomePage.module.css'
import logo from '../../assets/logo.png'
import arrowRight from '../../assets/arrowRight.png'
import {Link} from "react-router-dom";
const WelcomePage = ()=> {
    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.Section}`}>
                    <div className={`${styles.LogoDiv}`}>
                        <img src={`${logo}`} alt={'logo'} />

                    </div>
                    <div className={`${styles.DescriptionDiv}`}>
                        Join us at FRIENDS, where we cultivate a vibrant community through engaging weekly meetings on thought-provoking topics, fostering meaningful connections and enriching your university experience
                    </div>
                    <Link className={`${styles.EventLink}`} to={'/homePage'}>Events<img src={`${arrowRight}`} alt={'arrowRight'} /></Link>

                </div>

            </div>
        </>
    );
}
export default WelcomePage