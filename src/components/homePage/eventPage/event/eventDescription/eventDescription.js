import styles from './eventDescription.module.css'
import TopBar from "../../../../common/topBar/topBar";
import arrowBack from '../../../../../assets/arrowback.png'
import {useContext, useState} from "react";
import {authUserContext} from "../../../../../auth/authUserContext";
import editIcon from '../../../../../assets/editMode/edit.png'
import deleteIcon from '../../../../../assets/editMode/delete.png'
import AlertBox from "../../../../common/alertBox/alertBox";
import tickIcon from '../../../../../assets/eventDescriptionPage/tick.png'
import discardIcon from '../../../../../assets/eventDescriptionPage/cross.png'
import {convertDateBack, convertedDateFormat} from "../../../../utils/dateObjectConverter";
import {editData} from "../../../../utils/editData";


const EventDescription = (props)=> {

    const {currentUser} = useContext(authUserContext);
    const [openAlertBox, setOpenAlertBox] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [thumbnailFile,setThumbnailFile] = useState(props.data.titleImageURL);
    const [title,setTitle] = useState(props.data.title);
    const [date,setDate] = useState(props.data.date);
    const [description,setDescription] = useState(props.data.description);

    const closeAlertBox = ()=> setOpenAlertBox(false)

    const handleDeleteButton = ()=> {
        setOpenAlertBox(true);
    }
    const handleSaveEditButton = ()=> {
        editData(thumbnailFile,title,date,description,props.data.title,props.data.titleImageURL).then(
            ()=>{
                props.setOnFocusSection('EVENTS');
            }
        )
        }

    return(
        <>
            {
                openAlertBox
                    && <AlertBox setOnFocusSection={props.setOnFocusSection} closeAlertBox={closeAlertBox} dataToDelete={props.data}/>

            }

        <div className={`${styles.Container}`}>
            <TopBar />
            <div className={`${styles.InfoSection}`}>

                {
                    currentUser !== null
                        && (
                            <div className={`${styles.AdminDiv}`}>
                                <button onClick={()=> setEditMode(!editMode)} className={`${styles.AdminButtons}`}>{editMode ? 'Discard' : 'Edit'}<img src={`${editMode ? discardIcon : editIcon}`} alt={'img'} /></button>

                                {
                                    editMode
                                        ?<button onClick={handleSaveEditButton} className={`${styles.AdminButtons}`}>Save<img src={`${tickIcon}`} alt={'img'}/></button>
                                        :<button onClick={handleDeleteButton} className={`${styles.AdminButtons}`}>Delete<img src={`${deleteIcon}`} alt={'img'}/></button>

                                }

                            </div>
                    )

                }


                {
                    editMode
                        ? <div className={`${styles.TitleEditDiv}`}>
                            <button className={`${styles.TitleButton}`} onClick={() => props.setOnFocusSection('EVENTS')}>
                                <img src={`${arrowBack}`} alt={'arrowBack'}/></button>
                            <input onChange={(event) => setTitle(event.target.value)} type={'text'}
                                   defaultValue={props.data.title} className={`${styles.TitleEdit}`}/>
                            <input className={`${styles.thumbnailInput}`} type={"file"} accept="image/*"
                                   onChange={(event) => setThumbnailFile(event.target.files[0])}/>


                        </div>
                        : <p className={`${styles.Title}`}>
                            <button className={`${styles.TitleButton}`} onClick={() => props.setOnFocusSection('EVENTS')}>
                                <img src={`${arrowBack}`} alt={'arrowBack'}/></button>{props.data.title}</p>


                }
                {

                    editMode
                        ? <div><input  onChange={(event)=> setDate(convertedDateFormat(event.target.value))} type={'date'}  defaultValue={convertDateBack(props.data.date)} className={`${styles.DateEdit} ${styles.Date}`}/></div>
                        : <p className={`${styles.Date}`}>{props.data.date}</p>


                }

                {
                    editMode
                        ? <div><textarea  onChange={(event)=> setDescription(event.target.value)} defaultValue={props.data.description} className={`${styles.DescriptionEdit} ${styles.Description}`}/></div>
                        : <p className={`${styles.Description}`}>{props.data.description}</p>

                }

            </div>
            <div className={`${styles.GallerySection}`}>

            </div>
        </div>

        </>
    );
}
export default EventDescription