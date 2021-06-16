import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

function Footer() {
    return(
        <footer className={styles.footer}>    
            <div className={styles.footer_items}>
                <p>
                    Made by&nbsp;
                    <a href="https://www.tedxcmu.org/" target="_blank" rel="noreferrer noopener">
                        TEDxCMU
                    </a>
                </p>
                <p>
                    <Link to="/login">
                        Admin
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
