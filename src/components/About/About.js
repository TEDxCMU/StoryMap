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
                    I Know A Place is a joint venture by TEDxCMU Innovation and TEDxCMU Salon.
                </p>
            </section>
            <section className={styles.block}>
                <h2 className={styles.title}>
                    Salon
                </h2>
                <p className={styles.text}>
                    TEDxCMU Salon is a tight-knit team that uplifts student voices and strengthens our Carnegie Mellon community through self-curated events, projects, and gatherings outside of the annual TEDx mainstage conference. We strive for relevance to our current collective moment and impact on community. Feel free to engage with our past events, including Black Academics Matter, via <a href='https://www.tedxcmu.org/'>tedxcmu.org</a>.
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
