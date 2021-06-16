import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
    return(
        <nav>
            <div className={styles.header_items}>
                <div className={styles.logo_container}>
                    <Link to="/">
                        <img className={styles.logo} src="/tedx-logo.svg" alt="TEDxCMU Logo" />
                    </Link>
                </div>
                <div className={styles.text_link_items}>
                    <Link className={styles.textLinks} to="/about">
                        ABOUT
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;
