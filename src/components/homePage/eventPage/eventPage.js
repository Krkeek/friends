import styles from './eventPage.module.css'
import EventCard from "./eventCard/eventCard";
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from '../../../firebase';
import {useEffect, useState} from "react";
import React from "react";
    const EventPage = (props, ref) => {

    const [eventCards,setEventCards] = useState([]);
    const fetchCards = async ()=>{
        await getDocs(collection(db,"events"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc)=>({...doc.data()}));
                setEventCards(newData);
            })
    }

    useEffect(() => {
        fetchCards().then(() => {
        }).catch((error) => {
            console.error('Error during fetch cards:', error);
        });

    }, []);


    return(
        <>
            <div ref={ref} className={`PageSection ${styles.eventPage}`}>
                <div className={`${styles.titleGroup}`}>
                    <p className={styles.title}>Events</p>
                    <div className={styles.line}></div>
                </div>
                <div className={`${styles.eventWrapper}`}>

                    {eventCards.map((data)=>(
                        <EventCard key={data.title} title={data.title} date={data.date} description = {data.description} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default React.forwardRef(EventPage);