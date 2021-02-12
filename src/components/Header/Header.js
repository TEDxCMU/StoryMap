import { ReactComponent as Logo } from "../../public/TEDx-logo.svg";
import styles from './Header.module.scss';

export default function Header() {
    return(
        <nav>
            <div className={styles.header_items}>
                <div className={styles.logo_container}>
                    <a href="https://www.tedxcmu.org/" target="_blank">
                        <Logo className={styles.logo}/>
                    </a>
                </div>
                {/* <a href="/">
                    <h1 className={styles.title}>Story Map</h1>
                </a> */}
            </div>
        </nav>
    )
}