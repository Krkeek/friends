import styles from './navbar.module.css'
import logo from '../../assets/logo.png'
import NavMenu from "./navMenu/navMenu";
import {Link, NavLink} from "react-router-dom";
import {useRef, useState} from "react";
import EventPage from "../homePage/eventPage/eventPage";
import contactPage from "../homePage/contactPage/contactPage";
const  Navbar = ({eventPageRef,aboutUsPageRef,contactPageRef}) =>{


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
                        <NavLink  to={'/contact'} className={`${styles.navElement}`} >Contact</NavLink>
                        <NavLink  to={'/loginPage'} className={`${styles.navElement}`} >Login</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;