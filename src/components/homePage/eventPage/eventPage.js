import styles from './eventPage.module.css'
import TopBar from "../../common/topBar/topBar";
import Event from "./event/event";
import {useContext, useEffect, useState} from "react";
import {fetchData} from "../../utils/fetchData";
import {sortData} from "../../utils/dateObjectConverter";
import {authUserContext} from "../../../auth/authUserContext";
import plusEventIcon from '../../../assets/itemPlus.png'
const EventPage = (props)=> {
    const [data,setData] = useState(null);
    const {currentUser} = useContext(authUserContext)

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
                {
                    currentUser === null
                    ?<Event recentEvent={true}  setOnFocusSection={props.setOnFocusSection} data={data && data[0]} handleDescriptionPageData={props.handleDescriptionPageData} />
                    : <button onClick={()=> props.setOnFocusSection('ADD_EVENT')} className={`${styles.AddEventButton}`}>Add an event<img src={`${plusEventIcon}`} alt={'plus'} /></button>

                }
            </div>
            <div className={`${styles.OtherEventsDiv}`}>
                <div className={`${styles.TitleDiv}`}>
                    <div className={`${styles.Title}`}>More Events</div>
                    <div className={`${styles.Line}`}></div>
                </div>
                {data?.map((event,index)=>{

                    if (currentUser === null && event?.date === data[0]?.date){
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