import LandingPage from "./landingPage/landingPage";
import EventPage from "./eventPage/eventPage";
import AboutUsPage from "./aboutUsPage/aboutUsPage";
import Navbar from "../navbar/navbar";
import {useRef} from "react";
import ContactPage from "./contactPage/contactPage";
export default function HomePage(){
    const eventPageRef = useRef(null);
    const aboutUsRef = useRef(null);
    const contactPageRef = useRef(null);


    return(
        <>
            <LandingPage eventPageRef={eventPageRef} aboutUsRef={aboutUsRef} contactPageRef={contactPageRef} />
            <EventPage ref={eventPageRef} />
            <AboutUsPage ref={aboutUsRef} />
        </>
    );
}