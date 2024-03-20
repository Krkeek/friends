import styles from './aboutUsPage.module.css'
import React, {useContext, useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";
import loginIcon from "../../../assets/loginIcon.png";
import logoutIcon from "../../../assets/logoutIcon.png";
import {authUserContext} from "../../../auth/authUserContext";
import {signOutUser} from "../../../auth/authentication";

const AboutUsPage = () => {
    const {currentUser, logoutUser} = useContext(authUserContext);

    const handleLogoutButton = ()=> {
        signOutUser()
        logoutUser()

    }

    const animationRef = useRef();
    useGSAP(()=>{
        gsap.timeline()
            .fromTo('.aboutUsAnimation',{opacity:0},{opacity:1, duration:1.5})
    },{scope: animationRef})

    return(
        <div ref={animationRef}>
            <div className={`${styles.Container} aboutUsAnimation`}>
                <div className={`${styles.ContentContainer}`}>
                    <p className={`${styles.Title}`}>About us.</p>
                    <p className={`${styles.Description}`}>Welcome to our vibrant community! At FRIENDS, we recognize the pivotal role that friendships play in shaping the university experience. Our About Us page celebrates the spirit of camaraderie that thrives within our campus. Here, friendships aren't just connections; they are the foundation of a supportive network that enhances both academic and personal growth. Whether you're collaborating on group projects, engaging in spirited discussions, or creating lasting memories at campus events, the friendships forged at Tu Chemnitz are an integral part of your educational journey</p>
                    <p className={`${styles.Description}`}>Join us in cultivating meaningful connections that extend beyond the classroom, fostering an environment where lifelong friendships are nurtured and cherished.</p>
                    {
                        currentUser === null
                            ? <Link className={`${styles.LoginButton} buttonAnimation`} to={'/loginPage'}><img src={`${loginIcon}`} alt={'icon'} /></Link>
                            : <Link onClick={handleLogoutButton} className={`${styles.LoginButton} buttonAnimation`} to={'#'}><img src={`${logoutIcon}`} alt={'icon'} /></Link>
                    }
                </div>
                <div className={`${styles.Circle}`}></div>
            </div>
        </div>
    );
}
export default React.forwardRef(AboutUsPage);