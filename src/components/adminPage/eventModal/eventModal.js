import styles from './eventModal.module.css'
import {collection, doc, getDocs, query, setDoc, where} from "firebase/firestore";
import {useState} from "react";
import {db, storage} from '../../../firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const EventModal = ({closeModal})=>{

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageUrl] = useState();


    const isvValid =  () => {
        return (!(title === '' || date === '' || description === '' || imageURL === undefined))
    }

    const isUnique = async () => {
        const eventRef = collection(db, 'events');
        const q = query(eventRef, where('title', '==', title));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.docs.some((doc) => {
            return doc.exists;
        });

    }

    const handleAddEvent = async () => {

        if (isvValid() && await isUnique()){
            const storageRef = ref(storage, `events/${title}-${Date.now()}`);

            uploadBytes(storageRef, imageURL)
                .then(()=>{
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
        else {
            prompt('not valid!')
        }

    }


    {/*
        const getCropData = async () => {
        if (cropper) {
            const file = await fetch(cropper.getCroppedCanvas().toDataURL())
                .then((res) => res.blob())
                .then((blob) => {
                    return new File([blob], "newAvatar.png", { type: "image/png" });
                });
            if (file) {
                authService
                    .uploadAvatar(userId, file)
                    .then(() => {
                        refetchUser(userId);
                        cancelEdit();
                    })
                    .catch((e) => alert(e));
            }
        }
    };


    */}





    return(
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <span className={styles.close} onClick={closeModal}>&times;</span>
                    <div className={'row'}>
                        <div className={'col'}>
                            <input accept="image/*" type={"file"} onChange={(event)=> setImageUrl(event.target.files[0])} required/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <Cropper
                                src={'x.png'}
                                minCropBoxHeight={400}
                                minCropBoxWidth={400}
                                initialAspectRatio={1/1.5}
                                style={{ height: 400, width: 400 }}
                                cropBoxResizable={false}
                                guides={true}
                                checkOrientation={true}
                                onInitialized={()=>{
                                }}
                            />
                            <button>Crop Image</button>
                        </div>
                    </div>
                    <div className={'row mt-2'}>
                        <div className={'col'}>
                            Title:<input onChange={(event)=> setTitle(event.target.value)} type={"text"} required/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            Date:<input onChange={(event)=> setDate(event.target.value)} type={"date"} required/>

                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            Description:<textarea onChange={(event)=> setDescription(event.target.value)} required/>
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