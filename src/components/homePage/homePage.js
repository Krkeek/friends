import LandingPage from "./landingPage/landingPage";
import EventPage from "./eventPage/eventPage";
import AboutUsPage from "./aboutUsPage/aboutUsPage";
export default function HomePage(){
    return(
        <>
            <LandingPage />
            <EventPage />
            <AboutUsPage />
        </>
    );
}