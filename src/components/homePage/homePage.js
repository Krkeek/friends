
import {useState} from "react";
import SideBar from "../sideBar/sideBar";
import styles from './homePage.module.css'
import EventPage from "./eventPage/eventPage";
import ContactPage from "./contactPage/contactPage";
import AboutUsPage from "./aboutUsPage/aboutUsPage";
import WelcomePage from "../welcomePage/welcomePage";
import EventDescription from "./eventPage/event/eventDescription/eventDescription";
export default function HomePage(){

    const [onFocusSection, setOnFocusSection] = useState('EVENTS');
    const setOnFocusSectionFn = (section)=> setOnFocusSection(section)


    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.LeftSide}`}>
                    <SideBar setOnFocusSectionFn={setOnFocusSectionFn} />
                </div>
                <div className={`${styles.RightSide}`}>

                    {onFocusSection === 'HOME' && <WelcomePage />}
                    {onFocusSection === 'EVENTS' && <EventPage setOnFocusSection={setOnFocusSectionFn} />}
                    {onFocusSection === 'ABOUTUS' && <AboutUsPage />}
                    {onFocusSection === 'CONNECT' && <ContactPage />}
                    {onFocusSection === 'EVENT_DESCRIPTION' && <EventDescription setOnFocusSection={setOnFocusSectionFn} />}


                </div>
            </div>
        </>
    );
}