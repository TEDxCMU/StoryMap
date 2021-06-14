import styles from './Header.module.scss';

function Header() {
    return(
        <nav>
            <div className={styles.header_items}>
                <div className={styles.logo_container}>
                    <a href="https://www.tedxcmu.org/" target="_blank" rel="noreferrer noopener">
                        <img src="/tedx-logo.svg" alt="TEDxCMU Logo" />
                    </a>
                </div>
                <div className={styles.text_link_items} >
                    <a className={styles.textLinks} href="/">HOME</a>
                    &#160;  &#160;
                    <a className={styles.textLinks} href="/about">ABOUT THIS PAGE</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;
