
import {useContext, useEffect, useRef, useState} from "react";
import SideBar from "../common/sideBar/sideBar";
import styles from './homePage.module.css'
import EventPage from "./eventPage/eventPage";
import ContactPage from "./contactPage/contactPage";
import AboutUsPage from "./aboutUsPage/aboutUsPage";
import WelcomePage from "../welcomePage/welcomePage";
import EventDescription from "./eventPage/event/eventDescription/eventDescription";
import {checkAuthentication} from "../../auth/authentication";
import {authUserContext} from "../../auth/authUserContext";
import AddEventPage from "./eventPage/addEventPage/addEventPage";
import {useGSAP} from "@gsap/react";
import {homePageAnimation} from "../../animations/homePage";

export default function HomePage(){

    const animationRef = useRef();


    useGSAP(()=>{
        homePageAnimation()
    },{scope: animationRef})


    const [onFocusSection, setOnFocusSection] = useState('EVENTS');
    const [onFocusEvent, setOnFocusEvent] = useState({})
    const {loginUser} = useContext(authUserContext);
    const setOnFocusSectionFn = (section)=> setOnFocusSection(section)

    const handleDescriptionPageData = (data)=> {
        setOnFocusEvent(data);
        setOnFocusSection('EVENT_DESCRIPTION');

    }

    useEffect(() => {
        checkAuthentication()
            .then((user) => {
                if (user)
                {
                    loginUser(user);
                }
            })

    }, []);

    return(
        <div ref={animationRef}>

                <div className={`${styles.Container} homePageAnimation`}>
                    <div className={`${styles.LeftSide}`}>
                        <SideBar onFocusSection={onFocusSection} setOnFocusSectionFn={setOnFocusSectionFn}/>
                    </div>
                    <div className={`${styles.RightSide}`}>

                        {onFocusSection === 'HOME' && <WelcomePage/>}
                        {onFocusSection === 'EVENTS' && <EventPage handleDescriptionPageData={handleDescriptionPageData}
                                                                   setOnFocusSection={setOnFocusSectionFn}/>}
                        {onFocusSection === 'ABOUTUS' && <AboutUsPage/>}
                        {onFocusSection === 'CONNECT' && <ContactPage/>}
                        {onFocusSection === 'EVENT_DESCRIPTION' &&
                            <EventDescription data={onFocusEvent} setOnFocusSection={setOnFocusSectionFn}/>}
                        {onFocusSection === 'ADD_EVENT' && <AddEventPage setOnFocusSection={setOnFocusSectionFn}/>}

                    </div>
                </div>
        </div>
    );
}