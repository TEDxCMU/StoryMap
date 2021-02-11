import styles from './InfoPanel.module.scss';

export default function InfoPanel() {
    return(
        <div className={styles.info_body}>
            <div className={styles.info_content}>
                <p className={styles.info_title}><span className={styles.info_fancy}>STORIES</span> GLOBALLY.</p>
                <p className={styles.info_text}>A virtual exploration of Carnegie Mellon's geographic and cultural diversity.</p>
            </div>
        </div>
    )
}