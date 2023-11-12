import styles from './eventPage.module.css'
import EventCard from "./eventCard/eventCard";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../../firebase';
import {useEffect, useState} from "react";
export default function EventPage(){

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

    useEffect(() => {
        // Log the updated state when it changes
        console.log('Updated Event Cards:', eventCards);
        console.log(eventCards.length);
        console.log(eventCards)
    }, [eventCards]);



    return(
        <>
            <div className={`PageSection ${styles.eventPage}`}>
                <div className={`${styles.titleGroup}`}>
                    <p className={styles.title}>Events</p>
                    <div className={styles.line}></div>
                </div>
                <div className={`${styles.eventWrapper}`}>

                    {eventCards.map((data)=>(
                        <EventCard title={data.title} date={data.date} description = {data.description} />
                    ))}


                </div>
            </div>
        </>
    );
}