import { collection, DocumentData, getDocs} from "firebase/firestore";
import {db, storage} from '../../firebase'
import {getDownloadURL, ref} from "firebase/storage";

export const fetchData = async () => {
    let fetchedData: DocumentData[] = [];
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
        fetchedData.push(doc.data());
    });

    return fetchedData;
}

export const fetchThumbnail = async (cloudStorageURI) => {

    const gsReference = ref(storage, cloudStorageURI);
    return await getDownloadURL(gsReference)
}