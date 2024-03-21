import styles from './event.module.css'
import {useEffect, useRef, useState} from "react";
import {fetchThumbnail} from "../../../utils/fetchData";
import {briefDescriptionConverter} from "../../../utils/briefDescriptionConverter";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const Event = (props)=> {

    const isMobile = window.innerWidth <= 768;
    const [imgUrl, setImgUrl] = useState(null);
    const [briefDescription, setBriefDescription] = useState('');

    const animationRef = useRef();
    useGSAP(()=>{
        gsap.timeline()
            .fromTo('.eventAnimation',{opacity:0},{opacity:1, duration:2},"1")
    },{scope: animationRef})


    const handleEventClick = ()=>{
        isMobile && props.handleDescriptionPageData(props.data);
    }

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
        <div ref={animationRef}>
            <div onClick={handleEventClick} className={`${styles.Container} eventAnimation  ${props.recentEvent && styles.recentContainer}`}>
                <div className={`${styles.LeftSide}  ${props.recentEvent && styles.recentLeftSide}`}>
                    <img loading={"lazy"} src={imgUrl} alt={'thumbnail'} className={`${styles.ThumbnailImg}`} />
                    <div className={`${styles.OverLay}`}>
                        <p className={`${styles.Title}`}>{props.data?.title}</p>
                        <p className={`${styles.Date}`}>{props.data?.date}</p>
                    </div>
                </div>
                <div className={`${styles.RightSide}  ${props.recentEvent && styles.recentRightSide}`}>
                <p className={`${styles.Title}`}>{props.data?.title}</p>
                    <p className={`${styles.Date}`}>{props.data?.date}</p>
                    <p className={`${styles.Description}  ${props.recentEvent && styles.recentDescription}`}>{briefDescription}</p>
                    <button onClick={()=> props.handleDescriptionPageData(props.data)} className={`${styles.SeeMoreButton}`}>See more</button>
                </div>
            </div>

        </div>
    );
}
export default Event