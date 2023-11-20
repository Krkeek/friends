import styles from './navbar.module.css'
import logo from '../../assets/logo.png'
import { NavLink} from "react-router-dom";

const  Navbar = ({eventPageRef,aboutUsPageRef}) =>{


    const scrollComponent = (section)=>{
        console.log('scrolling');
        section.current?.scrollIntoView({behavior:'smooth'});
    }

    return(
        <>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={` ${styles.logoCol} col d-flex justify-content-start`}><img  className={styles.imgLogo} src={logo} width={'170px'} alt={'logo'} /></div>
                    <div className={'col'}></div>
                    <div className={`col d-flex justify-content-end ${styles.navbarIconCol}`}>
                        <NavLink className={`${styles.navElement}`} to={'#Home'}>Home</NavLink>
                        <NavLink onClick={()=>scrollComponent(eventPageRef)}   className={`${styles.navElement}`} to={'#'}>Events</NavLink>
                        <NavLink onClick={()=>scrollComponent(aboutUsPageRef)} className={`${styles.navElement}`} to={'#'}>About us</NavLink>
                        <NavLink  to={'mailto:info@tucfriends.com'} className={`${styles.navElement}`} >Contact</NavLink>
                        <NavLink  to={'/loginPage'} className={`${styles.navElement}`} >Login</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;