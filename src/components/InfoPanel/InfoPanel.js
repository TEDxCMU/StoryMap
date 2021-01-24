import styles from './InfoPanel.module.scss';

export default function Header() {
    return(
        <div className={styles.info_body}>
            <div className={styles.info_content}>
                <p className={styles.info_title}><span className={styles.info_fancy}>STORIES</span> GLOBALLY.</p>
                <p className={styles.info_text}>Members of the CMU community around the world share their stories geographically.</p>
            </div>
        </div>
    )
}