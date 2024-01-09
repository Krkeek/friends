import styles from './addEventPage.module.css'
import crossIcon from '../../../../assets/eventDescriptionPage/cross.png'
import tickIcon from '../../../../assets/eventDescriptionPage/tick.png'
import {useState} from "react";
import {addData} from "../../../controllers/addData";

const AddEventPage = (props)=> {

    const [thumbnailFile,setThumbnailFile] = useState('');
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');

    const handleSaveData = ()=> {
        addData(thumbnailFile,title,date,description).then(()=>{
            props.setOnFocusSection('EVENTS');
        })
    }

    return(

        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.ButtonsDiv}`}>
                    <button  onClick={()=> props.setOnFocusSection('EVENTS')}>Cancel<img src={`${crossIcon}`} alt={'cross'} /></button>
                    <button onClick={handleSaveData}>Save<img src={`${tickIcon}`} alt={'tick'} /></button>
                </div>
                <input className={`${styles.thumbnailInput}`} type={"file"} accept="image/*"  onChange={(event)=> setThumbnailFile(event.target.files[0])} />
                <input className={`${styles.InputDesign}`} type={'text'} onChange={(event)=> setTitle(event.target.value)} placeholder={'Add title'}/>
                <input className={`${styles.InputDesign}`} type={'text'} onChange={(event)=> setDate(event.target.value)} placeholder={'Add date'}/>
                <textarea className={`${styles.InputDesign}`} onChange={(event)=> setDescription(event.target.value)} placeholder={'Add description'}></textarea>
                <div className={`${styles.AddPhotosDiv}`}></div>


            </div>
        </>
    );
}
export default AddEventPage