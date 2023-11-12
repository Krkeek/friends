import styles from './eventPage.module.css'
import EventCard from "./eventCard/eventCard";
export default function EventPage(){
    return(
        <>
            <div className={'PageSection'}>
                <div className={`${styles.titleGroup}`}>
                    <p className={styles.title}>Events</p>
                    <div className={styles.line}></div>
                </div>
                <div className={`${styles.eventWrapper}`}>
                    <EventCard />
                </div>
            </div>
        </>
    );
}