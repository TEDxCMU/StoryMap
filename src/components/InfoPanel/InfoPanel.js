import styles from './InfoPanel.module.scss';

function InfoPanel() {
    return(
        <div className={styles.info_body}>
            <div className={styles.info_content}>
                <p className={styles.info_title}>GLOBAL <span className={styles.info_fancy}>NARRATIVES</span>.</p>
                <p className={styles.info_text}>
                    A virtual exploration of Carnegie Mellon's geographic and cultural diversity.
                    <br/>
                    <i>Click on markers to see a story.</i>
                    <br/>
                    <i>Click on the map to start sharing your story.</i>
                </p>
            </div>
        </div>
    )
}

export default InfoPanel;
