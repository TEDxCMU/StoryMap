import cn from 'classnames';
import styles from './About.module.css';

function About() {
    return (
        <>
            <section className={cn(styles.block, styles.header)}>
                <h1 className={styles.title}>
                    About
                </h1>
                <p className={styles.text}>
                    StoryMap is a joint venture by TEDxCMU Innovation and TEDxCMU Salon.
                </p>
            </section>
            <section className={styles.block}>
                <h2 className={styles.title}>
                    Salon
                </h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
            <section className={styles.block}>
                <h2 className={styles.title}>
                    Innovation
                </h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
        </>
    )
}

export default About;
