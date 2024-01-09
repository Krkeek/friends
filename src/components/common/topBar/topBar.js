import styles from './topBar.module.css'
import {Link} from "react-router-dom";
import loginIcon from '../../../assets/loginIcon.png'
import logoutIcon from '../../../assets/logoutIcon.png'
import {useContext} from "react";
import {authUserContext} from "../../../auth/authUserContext";
import {signOutUser} from "../../../auth/authentication";
const TopBar = ()=> {

    const {currentUser, logoutUser} = useContext(authUserContext);
    const handleLogoutButton = ()=> {
        signOutUser()
        logoutUser()

    }


    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.LeftSide}`}>
                    <input placeholder={'Search'}/>

                </div>
                <div className={`${styles.RightSide}`}>
                    {
                        currentUser === null
                            ? <Link className={`${styles.LoginButton}`} to={'/loginPage'}>Login<img src={`${loginIcon}`} alt={'icon'} /></Link>
                            : <Link onClick={handleLogoutButton} className={`${styles.LoginButton}`} to={'#'}>Logout<img src={`${logoutIcon}`} alt={'icon'} /></Link>
                    }
                        </div>

            </div>
        </>
    );
}
export default TopBar