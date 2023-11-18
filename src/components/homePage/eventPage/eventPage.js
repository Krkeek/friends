import styles from './eventPage.module.css'
import EventCard from "./eventCard/eventCard";
import {collection, getDocs} from "firebase/firestore";
import {ref as storageRef, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import {db} from '../../../firebase';
import {useEffect, useState} from "react";
import React from "react";
import data from "bootstrap/js/src/dom/data";
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
                        <EventCard key={data.title} title={data.title} date={data.date} description = {data.description} url={data.titleImageURL} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default React.forwardRef(EventPage);