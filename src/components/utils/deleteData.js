import {db, storage} from "../../firebase";
import {deleteDoc, where, collection, query, getDocs} from "firebase/firestore";
import {deleteObject, ref} from "firebase/storage";


export const deleteData = async (dataToDelete) => {


    const eventRef = collection(db,'events');
    const q = query(eventRef, where('title', '==', dataToDelete.title));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=> deleteDoc(doc.ref));
    deleteThumbnail(dataToDelete.titleImageURL)
}

export const deleteThumbnail = (url)=> {
    const thumbnailRef = ref(storage, url);
    deleteObject(thumbnailRef)
        .then(()=>{})
        .catch((error)=>{
            console.error(error)
        })
}