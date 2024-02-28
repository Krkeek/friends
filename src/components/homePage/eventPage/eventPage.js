import styles from './eventPage.module.css'
import TopBar from "../../common/topBar/topBar";
import Event from "./event/event";
import {useContext, useRef} from "react";
import {fetchData} from "../../utils/fetchData";
import {authUserContext} from "../../../auth/authUserContext";
import plusEventIcon from '../../../assets/itemPlus.png'
import {useQuery} from "@tanstack/react-query";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const EventPage = (props)=> {

    const animationRef = useRef();
    useGSAP(()=>{
        gsap.timeline()
            .fromTo('.titleAnimation',{yPercent:-100, opacity:0},{yPercent:0,opacity:1})
    },{scope: animationRef})


    const {currentUser} = useContext(authUserContext);
    const {data, isLoading} = useQuery({
        queryFn: () => fetchData(),
        queryKey: ["fetchData"]
    })

    if (isLoading){
            return (
                <div ref={animationRef}>
                    <div className={`${styles.LoadingContainer} titleAnimation`}><p>Events is loading...</p></div>
                </div>
                )
    }

    return(
        <div ref={animationRef}>
        <div className={`${styles.Container}`}>
            <TopBar />
            <div style={{display: "block"}} className={`${styles.HightLightedEventsDiv}`}>
                <p className={`${styles.RecentEventTitle} titleAnimation`}>Recent Event</p>
                {
                    currentUser === null
                    ?<Event recentEvent={true}  setOnFocusSection={props.setOnFocusSection} data={data && data[0]} handleDescriptionPageData={props.handleDescriptionPageData} />
                    : <button onClick={()=> props.setOnFocusSection('ADD_EVENT')} className={`${styles.AddEventButton}`}>Add an event<img src={`${plusEventIcon}`} alt={'plus'} /></button>

                }
            </div>
            <div className={`${styles.OtherEventsDiv}`}>
                <div className={`${styles.TitleDiv} titleAnimation`}>
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
        </div>
    );
}
export default EventPage