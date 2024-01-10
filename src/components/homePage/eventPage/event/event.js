import styles from './event.module.css'
import {useEffect, useState} from "react";
import {fetchThumbnail} from "../../../utils/fetchData";
import {briefDescriptionConverter} from "../../../utils/briefDescriptionConverter";

const Event = (props)=> {

    const [imgUrl, setImgUrl] = useState(null);
    const [briefDescription, setBriefDescription] = useState('');


    useEffect(() => {
        if (props.data){
            fetchThumbnail(props.data.titleImageURL)
                .then(url =>{
                    setImgUrl(url)
                })
            setBriefDescription(briefDescriptionConverter(props.data?.description))
        }
    }, [props.data]);

    return(
        <>
            <div className={`${styles.Container}  ${props.recentEvent && styles.recentContainer}`}>
                <div className={`${styles.LeftSide}  ${props.recentEvent && styles.recentLeftSide}`}>
                    <img src={imgUrl} alt={'thumbnail'} className={`${styles.ThumbnailImg}`} />
                </div>
                <div className={`${styles.RightSide}  ${props.recentEvent && styles.recentRightSide}`}>
                    <p className={`${styles.Title}`}>{props.data?.title}</p>
                    <p className={`${styles.Date}`}>{props.data?.date}</p>
                    <p className={`${styles.Description}  ${props.recentEvent && styles.recentDescription}`}>{briefDescription}</p>
                    <button onClick={()=> props.handleDescriptionPageData(props.data)} className={`${styles.SeeMoreButton}`}>See more</button>
                </div>

            </div>

        </>
    );
}
export default Event