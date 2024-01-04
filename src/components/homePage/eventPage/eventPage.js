import styles from './eventPage.module.css'
import TopBar from "../../topBar/topBar";
import Event from "./event/event";
const EventPage = (props)=> {
    return(
        <>
        <div className={`${styles.Container}`}>
            <TopBar />
            <div style={{display: "block"}} className={`${styles.HightLightedEventsDiv}`}>
                <p className={`${styles.RecentEventTitle}`}>Recent Event</p>
                <Event setOnFocusSection={props.setOnFocusSection}  />
            </div>
            <div className={`${styles.OtherEventsDiv}`}>
                <div className={`${styles.TitleDiv}`}>
                    <div className={`${styles.Title}`}>More Events</div>
                    <div className={`${styles.Line}`}></div>
                </div>
                <Event setOnFocusSection={props.setOnFocusSection}  />
                <Event setOnFocusSection={props.setOnFocusSection}  />
                <Event setOnFocusSection={props.setOnFocusSection}  />
                <Event setOnFocusSection={props.setOnFocusSection}  />
                <Event setOnFocusSection={props.setOnFocusSection}  />
                <Event setOnFocusSection={props.setOnFocusSection}  />
                <Event setOnFocusSection={props.setOnFocusSection}  />
                <Event setOnFocusSection={props.setOnFocusSection}  />
                <Event setOnFocusSection={props.setOnFocusSection}  />


            </div>


        </div>
        </>
    );
}
export default EventPage