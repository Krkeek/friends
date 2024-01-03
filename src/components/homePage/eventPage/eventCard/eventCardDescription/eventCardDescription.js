import styles from './eventCardDescription.module.css'
import {getAuth} from "firebase/auth";
import {useEffect, useState} from "react";
import {query, deleteDoc, collection, where, getDocs} from "firebase/firestore";
import {db, storage} from "../../../../../firebase";
import {ref, deleteObject} from "firebase/storage";
import EventModal from "../../../../adminPage/eventModal/eventModal";
const EventCardDescription = (props)=>{

    const [isModalOpen, setModalOpen] = useState(false);
    const editMode = true;

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const auth = getAuth();
    const [isAuth, setIsAuth] = useState(auth);

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged((user)=>{
            user ? setIsAuth(true) : setIsAuth(false)
        })

        return () => unsubscribe();
    }, []);


    const handleDeleteEvent = async (title, url) => {
        const eventRef = collection(db,'events');
        const q = query(eventRef, where('title', '==', title));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            deleteDoc(doc.ref);
        })

        const thumbnailRef = ref(storage, url);
        deleteObject(thumbnailRef)
            .then(()=>{
                console.log('thumbnail deleted.')
            })
            .catch((error)=>{
                console.error(error)

            })


    }

    return(
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div style={{display: !isAuth ? 'none' : ' ' }} className={'row'}>
                        <div className={'col'}><button onClick={openModal}>Edit</button></div>
                        <div className={'col'}><button onClick={()=>handleDeleteEvent(props.title, props.url)}>Delete</button></div>
                    </div>

                    <span className={styles.close} onClick={props.closeModal}>&times;</span>

                    <div className={'row'}>
                        <div className={'col'}>
                            <img src={props.url} alt={props.url} width={400}/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>{props.title}</div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>{props.date}</div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>{props.description}</div>
                    </div>

                </div>
                {isModalOpen && <EventModal handleDeleteEvent={handleDeleteEvent} editMode={editMode} url={props.url} title={props.title} date={props.date} description={props.description} closeModal={closeModal} />}
            </div>
        </>
    );

}
export default EventCardDescription;