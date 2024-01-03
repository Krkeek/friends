import styles from './topBar.module.css'
import {Link} from "react-router-dom";
import loginIcon from '../../assets/loginIcon.png'
const TopBar = ()=> {
    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.LeftSide}`}>
                    <input placeholder={'Search'}/>

                </div>
                <div className={`${styles.RightSide}`}>
                    <Link className={`${styles.LoginButton}`} to={'/loginPage'}>Login<img src={`${loginIcon}`} alt={'icon'} /></Link>
                </div>

            </div>
        </>
    );
}
export default TopBar