import styles from './InfoPanel.module.css';

function InfoPanel() {
    return (
        <section className={styles.container}>
            <p className={styles.title}><span className={styles.span}>I KNOW A PLACE</span></p>
            <p className={styles.body}>
                A virtual exploration of Carnegie Mellon's geographic and cultural diversity.
                To get started, click on a marker to see a story. To share your story click on any part of the map.
            </p>
        </section>
    )
}

export default InfoPanel;
