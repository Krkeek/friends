import styles from './eventDescription.module.css'
import TopBar from "../../../../common/topBar/topBar";
import galleryImg from '../../../../../assets/gallerySection.png'
import arrowBack from '../../../../../assets/arrowback.png'
const EventDescription = (props)=> {
    return(
        <>
        <div className={`${styles.Container}`}>
            <TopBar />
            <div className={`${styles.InfoSection}`}>

                <p className={`${styles.Title}`}><button onClick={()=> props.setOnFocusSection('EVENTS') }><img src={`${arrowBack}`} alt={'arrowBack'} /></button>{props.data.title}</p>
                <p className={`${styles.Date}`}>{props.data.date}</p>
                <p className={`${styles.Description}`}>{props.data.description}</p>
            </div>
            <div className={`${styles.GallerySection}`}>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
                <img src={`${galleryImg}`} alt={'img'} className={`${styles.GalleryImg}`}/>
            </div>
        </div>

        </>
    );
}
export default EventDescription