import styles from './topBar.module.css'
import {Link} from "react-router-dom";
import loginIcon from '../../../assets/loginIcon.png'
import logoutIcon from '../../../assets/logoutIcon.png'
import {useContext, useRef} from "react";
import {authUserContext} from "../../../auth/authUserContext";
import {signOutUser} from "../../../auth/authentication";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
const TopBar = ()=> {

    const {currentUser, logoutUser} = useContext(authUserContext);
    const handleLogoutButton = ()=> {
        signOutUser()
        logoutUser()

    }

    const animationRef = useRef();

    useGSAP(()=>{
        gsap.timeline()
            .fromTo('.topBarContainerAnimation',{x:"100vw"},{x:0, duration:1.4})
            .fromTo('.buttonAnimation',{opacity: 0},{opacity:1, duration:1})
    },{scope: animationRef})



    return(
        <div ref={animationRef}>
            <div className={`${styles.Container} topBarContainerAnimation`}>
                <div className={`${styles.LeftSide}`}>
                    <input placeholder={'Search'}/>

                </div>
                <div className={`${styles.RightSide}`}>
                    {
                        currentUser === null
                            ? <Link className={`${styles.LoginButton} buttonAnimation`} to={'/loginPage'}>Login<img src={`${loginIcon}`} alt={'icon'} /></Link>
                            : <Link onClick={handleLogoutButton} className={`${styles.LoginButton} buttonAnimation`} to={'#'}>Logout<img src={`${logoutIcon}`} alt={'icon'} /></Link>
                    }
                        </div>

            </div>
        </div>
    );
}
export default TopBar