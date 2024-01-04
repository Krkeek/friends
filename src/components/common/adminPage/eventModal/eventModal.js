import styles from './eventModal.module.css'
import {collection, doc, getDocs, query, setDoc, where} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db, storage} from '../../../../firebase';
import { getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const EventModal = (props)=>{

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailURL: FileList, setThumbnailURL] = useState();
    const [thumbnailFile: FileList,setThumbnailFile] = useState();
    const [fileTopUpload: FileList, setFileTopUpload] = useState();

    useEffect(() => {
        console.log(props.url);
        if (props.editMode){
            setTitle(props.title);
            setDate(props.date);
            setDescription(props.description);
            fetch(props.url)
                .then((response)=>response.blob()
                    .then((file)=>{
                        setThumbnailFile(file);
                    })
                )
        }
    }, []);






    const isValid =  () => {
        return (!(title === '' || date === '' || description === ''))
    }

    const isUnique = async () => {
        const eventRef = collection(db, 'events');
        const q = query(eventRef, where('title', '==', title));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.docs.some((doc) => {
            return doc.exists;
        });

    }

    const handleAddEvent = ()=>{

        const storageRef = ref(storage, `events/${title}-${Date.now()}`);
        uploadBytes(storageRef, thumbnailFile)
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
                            props.closeModal();
                        })
                } catch (error) {
                    console.error('url error: ' + error);
                }

            })
    }

    const handleEditEvent = async () => {
        props.handleDeleteEvent(props.title,props.url);
        handleAddEvent();
        props.closeModal();
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
                    <span className={styles.close} onClick={props.closeModal}>&times;</span>
                    <div className={'row'}>
                        <div className={'col'}>
                            <input defaultValue={thumbnailFile} accept="image/*" type={"file"} onChange={(event)=> setThumbnailFile(event.target.files[0])} required/>
                            <img style={{display: !props.editMode && 'none' }} src={props.url} alt={'thumbnails'}/>
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
                            Title:<input defaultValue={props.title} onChange={(event)=> setTitle(event.target.value)} type={"text"} required/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            Date:<input defaultValue={props.date} onChange={(event)=> setDate(event.target.value)} type={"date"} required/>

                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            Description:<textarea defaultValue={props.description} onChange={(event)=> setDescription(event.target.value)} required/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <button >Add Photos to gallery</button>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <button type={"button"} onClick={()=> props.editMode ? handleEditEvent() : handleAddEvent()} >{props.editMode ? 'Edit event' : 'Add event'}</button>
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