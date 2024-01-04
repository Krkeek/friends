import styles from './event.module.css'
import thumbnailImg from '../../../../assets/thumbnail.png'

const Event = (props)=> {
    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.LeftSide}`}>
                    <img src={`${thumbnailImg}`} alt={'thumbnail'} className={`${styles.ThumbnailImg}`} />
                </div>
                <div className={`${styles.RightSide}`}>
                    <p className={`${styles.Title}`}>Graduation</p>
                    <p className={`${styles.Date}`}>Nov, 15 2023</p>
                    <p className={`${styles.Description}`}>Graduation marks the end of hard work and the beginning of new opportunities, symbolizing growth and achievement. It’s a pivotal.</p>
                    <button onClick={()=> props.setOnFocusSection('EVENT_DESCRIPTION')} className={`${styles.SeeMoreButton}`}>See more</button>
                </div>

            </div>

        </>
    );
}
export default Event