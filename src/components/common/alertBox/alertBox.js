import styles from './alertBox.module.css'
import {deleteData} from "../../utils/deleteData";
import {useMutation, useQueryClient} from "@tanstack/react-query";
const AlertBox = (props)=> {

    const queryClient = useQueryClient();
    const {mutateAsync, isPending} = useMutation({
        mutationFn: ()=> deleteData(props.dataToDelete),
        onSuccess: () => {
            queryClient.invalidateQueries(["fetchData"]).then()
        }
    })
    const handleConfirmDeletion = async () => {
        await mutateAsync()
        props.closeAlertBox();
        props.setOnFocusSection('EVENTS')
    }

    if (isPending){
        return (
            <div>
                Deleting the event...
            </div>
        )
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