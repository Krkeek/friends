import styles from './homePage.module.css'
import LandingPage from "./landingPage/landingPage";
import EventPage from "./eventPage/eventPage";
import Navbar from "../navbar/navbar";
export default function HomePage(){
    return(
        <>
            <LandingPage />
            <EventPage />
        </>
    );
}