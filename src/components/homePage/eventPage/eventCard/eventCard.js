import styles from './eventCard.module.css'
import photo from '../../../../assets/cardPhoto.jpg'
export default function EventCard(){
    return(
        <>
            <div className={`${styles.cardContainer}`}>
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
        </>
    );
}