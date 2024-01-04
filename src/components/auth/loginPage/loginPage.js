import styles from './loginPage.module.css'
import loginImg from '../../../assets/loginImg.png'
import {Link} from "react-router-dom";
const LoginPage = ()=> {
    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.LeftSide}`}>
                    <div className={`${styles.FormContainer}`}>
                        <p className={`${styles.Header}`}>Welcome Back</p>
                        <p className={`${styles.Subtitle}`}>Hello there! please enter your details </p>
                        <p className={`${styles.Label}`}>Email</p>
                        <input placeholder={'Enter your email'} className={`${styles.Input}`}/>
                        <p className={`${styles.Label}`}>Password</p>
                        <input placeholder={'Enter your password'} className={`${styles.Input}`}/>
                        <div>
                            <button className={`${styles.LoginButton}`}>Log in</button>
                        </div>
                            <Link className={`${styles.HomePageButton}`} to={'/homePage'}>Back to Home Page</Link>
                    </div>


                </div>
                <div className={`${styles.RightSide}`}>
                    <img src={`${loginImg}`} alt={'img'} />
                </div>

            </div>
        </>
    );
}
export default LoginPage;