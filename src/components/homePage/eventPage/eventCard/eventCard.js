import styles from './eventCard.module.css'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { gsap } from "gsap";
import {useEffect, useLayoutEffect, useRef, useState} from "react";

export default function EventCard(props){
    const [downloadURL, setDownloadURL] = useState('');


    return(
        <>
            <div>
                <div className={`${styles.cardContainer} cardContainer`}>
                    <div className={'row'}>
                        <div className={'col'}>
                            <img className={`${styles.img}`} src={props.url} alt={props.url} />
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <p className={styles.date}>{props.date}</p>
                            <p className={styles.title}>{props.title}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}