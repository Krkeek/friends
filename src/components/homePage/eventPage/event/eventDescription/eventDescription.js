import styles from './eventDescription.module.css'
import TopBar from "../../../../topBar/topBar";
import galleryImg from '../../../../../assets/gallerySection.png'
import arrowBack from '../../../../../assets/arrowback.png'
const EventDescription = (props)=> {
    return(
        <>
        <div className={`${styles.Container}`}>
            <TopBar />
            <div className={`${styles.InfoSection}`}>

                <p className={`${styles.Title}`}><button onClick={()=> props.setOnFocusSection('EVENTS') }><img src={`${arrowBack}`} alt={'arrowBack'} /></button> Graduation</p>
                <p className={`${styles.Date}`}>Nov, 15 2023</p>
                <p className={`${styles.Description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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