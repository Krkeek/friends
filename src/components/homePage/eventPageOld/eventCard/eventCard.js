import styles from './eventCard.module.css'
import {useState} from "react";
import EventCardDescription from "./eventCardDescription/eventCardDescription";


export default function EventCard(props){
    const [isModalOpen, setModalOpen] = useState(false);



    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };



    return(
        <>
            <div onClick={openModal}>
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
            {isModalOpen && <EventCardDescription title={props.title} date={props.date} url={props.url} description={props.description} closeModal={closeModal} />}

        </>
    );
}