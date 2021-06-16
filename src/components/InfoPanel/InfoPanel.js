import styles from './InfoPanel.module.scss';

function InfoPanel() {
    return(
        <div className={styles.info_body}>
            <div className={styles.info_content}>
                <p className={styles.info_title}>GLOBAL <span className={styles.info_fancy}>NARRATIVES</span>.</p>
                <p className={styles.info_text}>A virtual exploration of Carnegie Mellon's geographic and cultural diversity. <br/> <i> click on markers to see a story <br/> click on the map to start sharing your story </i> </p>
                {/* <p className={styles.info_text}>hover over markers to see a story <br/> click anywhere to start sharing your story</p> */}
            </div>
        </div>
    )
}

export default InfoPanel;
