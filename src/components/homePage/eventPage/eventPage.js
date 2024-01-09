import styles from './eventPage.module.css'
import TopBar from "../../common/topBar/topBar";
import Event from "./event/event";
import {useContext, useEffect, useState} from "react";
import {fetchData} from "../../controllers/fetchData";
import {sortData} from "../../controllers/dateObjectConverter";
import {authUserContext} from "../../../auth/authUserContext";
const EventPage = (props)=> {
    const [data,setData] = useState(null);

    useEffect( () => {
        fetchData().then(data =>{
            setData(data);
            let sortedEvents = sortData(data);
            setData(sortedEvents)

        })
    }, []);



    return(
        <>
        <div className={`${styles.Container}`}>
            <TopBar />
            <div style={{display: "block"}} className={`${styles.HightLightedEventsDiv}`}>
                <p className={`${styles.RecentEventTitle}`}>Recent Event</p>
                <Event recentEvent={true}  setOnFocusSection={props.setOnFocusSection} data={data && data[0]} handleDescriptionPageData={props.handleDescriptionPageData} />

            </div>
            <div className={`${styles.OtherEventsDiv}`}>
                <div className={`${styles.TitleDiv}`}>
                    <div className={`${styles.Title}`}>More Events</div>
                    <div className={`${styles.Line}`}></div>
                </div>
                {data?.map((event,index)=>{

                    if (event?.date === data[0]?.date){
                        return  null;
                    }
                    return (
                        <Event recentEvent={false} key={index} setOnFocusSection={props.setOnFocusSection} data={event} handleDescriptionPageData={props.handleDescriptionPageData} />
                    )
                })}

            </div>


        </div>
        </>
    );
}
export default EventPage