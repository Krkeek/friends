import styles from './navbar.module.css'
import logo from '../../assets/logo.png'
import NavMenu from "./navMenu/navMenu";
export default  function Navbar(){
    return(
        <>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={` ${styles.logoCol} col d-flex justify-content-start`}><img  className={styles.imgLogo} src={logo} width={'170px'} alt={'logo'} /></div>
                    <div className={'col'}></div>
                    <div className={`col d-flex justify-content-end align-content-center ${styles.navbarIconCol}`}><NavMenu /></div>
                </div>
            </div>
        </>
    );
}