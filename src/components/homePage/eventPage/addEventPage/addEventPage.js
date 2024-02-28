import styles from './addEventPage.module.css'
import crossIcon from '../../../../assets/eventDescriptionPage/cross.png'
import tickIcon from '../../../../assets/eventDescriptionPage/tick.png'
import {useState} from "react";
import {addData} from "../../../utils/addData";
import {convertedDateFormat} from "../../../utils/dateObjectConverter";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {isValid} from "../../../utils/isValid";


const AddEventPage = (props)=> {

    const [thumbnailFile,setThumbnailFile] = useState('');
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');
    const queryClient = useQueryClient();
    const [errors, setErrors] = useState("");

    const { mutateAsync, isPending} = useMutation({
        mutationFn: () => addData(thumbnailFile, title, date, description),
        onSuccess: () => {
            queryClient.invalidateQueries(["fetchData"])

        }
    })

    if (isPending){
        return(
            <>
                <div className={`${styles.isPending}`}>
                    Adding the event...
                </div>
            </>
        )
    }

    const handleSaveData = async () => {
        if (isValid(thumbnailFile,title,date)){
            await mutateAsync();
            props.setOnFocusSection('EVENTS')
        }
        else {
            setErrors("*Missing data, try again.")
        }
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
                <input className={`${styles.InputDesign} ${styles.DateDesign}`} type={'date'} onChange={(event)=> setDate(convertedDateFormat(event.target.value))} placeholder={'Add date'}/>
                <textarea className={`${styles.InputDesign}`} onChange={(event)=> setDescription(event.target.value)} placeholder={'Add description'}></textarea>
                <div className={`${styles.Errors}`}></div>
                <div className={`${styles.AddPhotosDiv}`}>{errors}</div>


            </div>
        </>
    );
}
export default AddEventPage