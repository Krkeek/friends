import styles from './aboutUsPage.module.css'
export default function AboutUsPage(){
    return(
        <>
            <div className={'PageSection'}>
                <div className={`${styles.titleGroup}`}>
                    <div className={styles.line}></div>
                    <p className={styles.title}>About Us</p>
                <div className={`${styles.content} z-0 position-absolute`}>
                    <p>Welcome to Friends International Community, where diversity meets dialogue, and connections span the globe.Founded on the belief that meaningful conversations can bridge cultures, we bring together students from every corner of the world.</p>
                        <p>At Friends, we curate weekly topics that spark curiosity and foster understanding. From lively virtual discussions to collaborative projects, our international community thrives on the exchange of ideas and experiences.</p>
                </div>
                    <svg className={`${styles.circle} z-n1 position-absolute`} xmlns="http://www.w3.org/2000/svg" width="522" height="522" viewBox="0 0 522 522" fill="none">
                        <path d="M522 261C522 405.146 405.146 522 261 522C116.854 522 0 405.146 0 261C0 116.854 116.854 0 261 0C405.146 0 522 116.854 522 261Z" fill="#636366" fillOpacity="0.2"/>
                    </svg>
                </div>
            </div>
        </>
    );
}