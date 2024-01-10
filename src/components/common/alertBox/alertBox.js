import styles from './alertBox.module.css'
import {deleteData} from "../../utils/deleteData";
const AlertBox = (props)=> {

    const handleConfirmDeletion = ()=> {
        deleteData(props.dataToDelete)
            .then(()=>{
                props.closeAlertBox();
                props.setOnFocusSection('EVENTS')
            })
    }

    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.AlertBox}`}>
                    <div className={`${styles.AlertSentence}`}>Are you sure you want to delete this event?</div>
                    <div className={`${styles.AlertButtons}`}>
                        <button onClick={()=> props.closeAlertBox()}>Back</button>
                        <button onClick={handleConfirmDeletion}>Confirm</button>
                    </div>
                </div>


            </div>


        </>
    );
}
export default AlertBox