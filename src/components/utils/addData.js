import {collection, doc, setDoc} from "firebase/firestore";
import {db, storage} from "../../firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {isUnique} from "./isUnique";

export const addData = async (thumbnailFile, title,date, description) => {

    if (isUnique()){
        const eventCollection = collection(db,'events');
        const newRef = doc(eventCollection);
        const storageRef = await uploadThumbnailToStorage(thumbnailFile, title);
        const thumbnailUrl = await getThumbnailUrl(storageRef);


        const eventData = {
            title: title,
            date: date,
            description: description,
            titleImageURL: thumbnailUrl
        }

        try{
            setDoc(newRef,eventData)
                .then(()=>{
                    console.log('Event added.')
                })
        }
        catch(error){
            console.log(error)
        }


    }
}



export const getThumbnailUrl = async (storageRef)=> {
    return await getDownloadURL(storageRef)

}

export const uploadThumbnailToStorage = async (thumbnailFile,title)=> {
    const storageRef = ref(storage, `events/${title}-${Date.now()}`);
    await uploadBytes(storageRef, thumbnailFile)
    return storageRef
}


