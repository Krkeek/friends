import styles from './eventPage.module.css'
import TopBar from "../../topBar/topBar";
const EventPage = ()=> {
    return(
        <>
        <div className={`${styles.Container}`}>
            <TopBar />
            <div style={{display: "none"}} className={`${styles.HightLightedEventsDiv}`}>
                <p>Recent Event</p>
            </div>
            <div className={`${styles.OtherEventsDiv}`}>
                <div className={`${styles.TitleDiv}`}>
                    <div className={`${styles.Title}`}>More Events</div>
                    <div className={`${styles.Line}`}></div>
                </div>
            </div>


        </div>
        </>
    );
}
export default EventPage