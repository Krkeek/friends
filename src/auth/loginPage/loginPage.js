import styles from './loginPage.module.css'
import loginImg from '../../assets/loginImg.webp'
import {Link} from "react-router-dom";
import {useContext, useRef, useState} from "react";
import {signInUser} from "../authentication";
import {authUserContext} from "../authUserContext";
import { useNavigate } from "react-router-dom";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";


const LoginPage = ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loginUser} = useContext(authUserContext)
    const navigate = useNavigate();

    const handleLoginButton = async () => {
        if (email !== '' || password !== '') {
            const userCredentials = await signInUser(email, password);
            if (userCredentials){
                loginUser(userCredentials);
                navigate('/homePage')
            }else {
                console.log('Invalid email or password')
            }

        }
    }


    const animationRef = useRef();
    useGSAP(()=>{
        gsap.timeline()
            .fromTo('.loginPageAnimation',{opacity:0},{opacity:1, duration:1.5})
    },{scope: animationRef})

    return(
        <div ref={animationRef}>
            <div className={`${styles.Container} loginPageAnimation`}>
                <div className={`${styles.LeftSide}`}>
                    <div className={`${styles.FormContainer}`}>
                        <p className={`${styles.Header}`}>Welcome Back</p>
                        <p className={`${styles.Subtitle}`}>Hello there! please enter your details </p>
                        <p className={`${styles.Label}`}>Email</p>
                        <input type={"email"} placeholder={'Enter your email'} className={`${styles.Input}`} onChange={(event)=> setEmail(event.target.value)}/>
                        <p className={`${styles.Label}`}>Password</p>
                        <input type={"password"} placeholder={'Enter your password'} className={`${styles.Input}`}  onChange={(event)=> setPassword(event.target.value)}/>
                        <div className={`${styles.ButtonDiv}`}>
                            <button onClick={handleLoginButton} className={`${styles.LoginButton}`}>Log in</button>
                        </div>
                        <Link className={`${styles.HomePageButton}`} to={'/homePage'}>Back to Home Page</Link>
                    </div>
                </div>
                <div className={`${styles.RightSide}`}>
                    <img src={`${loginImg}`} alt={'img'} />
                </div>

            </div>
        </div>
    );
}
export default LoginPage;