import styles from './eventCard.module.css'
import photo from '../../../../assets/cardPhoto.jpg'
import { gsap } from "gsap";
import {useLayoutEffect, useRef} from "react";
export default function EventCard(){

    const animationScope = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(()=>{
        },animationScope)
    }, []);



    return(
        <>
            <div ref={animationScope}>
                <div className={`${styles.cardContainer} cardContainer`}>
                    <div className={'row'}>
                        <div className={'col'}>
                            <img className={`${styles.img}`} src={photo} alt={'photoCard'} />
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <p className={styles.date}>Thursday 04.01.2024</p>
                            <p className={styles.title}>Welcome Back: Reconnect 2024</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}