import styles from './eventModal.module.css'
import {collection, doc, setDoc} from "firebase/firestore";
import {useState} from "react";
import {db} from '../../../firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { storage } from "../../../firebase";
const EventModal = ({closeModal})=>{

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageUrl] = useState();



    const handleAddEvent = async () => {
        const storageRef = ref(storage, `events/${title}-${Date.now()}`);

            uploadBytes(storageRef, imageURL)
            .then((snapshot)=>{
                console.log('Image uploaded successfully!°');
                try {
                    getDownloadURL(storageRef)
                        .then((url)=>{
                            console.log('here:'+url);
                            const eventCollection = collection(db,'events');
                            const newRef = doc(eventCollection);
                            const eventData = {
                                date: date,
                                description: description,
                                title: title,
                                titleImageURL: url
                            }
                            setDoc(newRef, eventData)
                                .then(()=>{
                                    console.log('event added!')
                                })
                            closeModal();
                        })
                } catch (error) {
                    console.error('url error: ' + error);
                }

            })
    }
    return(
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <span className={styles.close} onClick={closeModal}>&times;</span>
                    <div className={'row'}>
                        <div className={'col'}>
                            <input accept="image/*" type={"file"} onChange={(event)=> setImageUrl(event.target.files[0])}/>
                        </div>
                    </div>
                    <div className={'row mt-2'}>
                        <div className={'col'}>
                            Title:<input onChange={(event)=> setTitle(event.target.value)} type={"text"}/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            Date:<input onChange={(event)=> setDate(event.target.value)} type={"date"}/>

                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            Description:<textarea onChange={(event)=> setDescription(event.target.value)} />
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <button >Add Photos to gallery</button>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <button type={"button"} onClick={()=>handleAddEvent()} >Add Event</button>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <div className={styles.gallery}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default EventModal;