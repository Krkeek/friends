import {collection, doc, getDocs, query, setDoc, where} from "firebase/firestore";
import {db} from "../../firebase";
import {getThumbnailUrl, uploadThumbnailToStorage} from "./addData";
import {deleteThumbnail} from "./deleteData";

export const editData = async (thumbnailImg,title,date,description, currentTitle, currentUrl)=> {

    const eventCollection = collection(db,'events');
    const q = query(eventCollection, where('title', '==', currentTitle));
    const querySnapshot = await getDocs(q);
    let url = thumbnailImg;



    if (typeof thumbnailImg !== "string"){
        deleteThumbnail(currentUrl);
        const storageRef = await uploadThumbnailToStorage(thumbnailImg, title);
        url = await getThumbnailUrl(storageRef);
    }

    if (!querySnapshot.empty){
        const eventData = {
            title: title,
            date: date,
            description: description,
            titleImageURL: url
        }

        try{
            const docRef = doc(eventCollection, querySnapshot.docs[0].id);
            setDoc(docRef,eventData)
                .then()
        }
        catch(error){
            console.log(error)
        }
    }

}

