import styles from './About.module.scss';

export default function About() {
    return(
        <div>
            <div className={`${styles.about_block} ${styles.about_lgray}`}>
                <p>StoryMap is a joint venture by TEDxCMU Innovation and TEDxCMU Salon.</p>
            </div>
            <div className={`${styles.about_block} ${styles.about_medgray}`}>
                <h2 className={styles.about_title}>SALON</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className={`${styles.about_block} ${styles.about_lgray}`}>
                <h2 className={styles.about_title}>INNOVATION</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className={`${styles.about_block}`}>
                <p>Want to be a part of our team? Check out <a href="https://www.tedxcmu.org/" target="_blank">our website</a> to see when we're looking for new members.</p>
            </div>
        </div>
    )
}