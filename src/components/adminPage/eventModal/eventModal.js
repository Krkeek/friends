import styles from './eventModal.module.css'
import {collection, doc, setDoc} from "firebase/firestore";
import {useState} from "react";
import {db} from '../../../firebase';

const EventModal = ({closeModal})=>{

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');



    const handleAddEvent = async (title, date, description) => {

            const newRef = doc(collection(db,'events'));
            await  setDoc(newRef, {
            date: date,
            description: description,
            title: title
        })

        closeModal();
    }
    return(
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <span className={styles.close} onClick={closeModal}>&times;</span>
                    <div className={'row'}>
                        <div className={'col'}>
                            <div>Image</div>
                            <button>Add image</button>

                        </div>
                    </div>
                    <div className={'row mt-2'}>
                        <div className={'col'}>
                            Title:<input onChange={(event)=> setTitle(event.target.value)} type={"text"}/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            Date:<input onChange={(event)=> setDate(event.target.value)} type={"text"}/>

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
                            <button onClick={()=>handleAddEvent(title, date, description)} >Add Event</button>
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