import styles from './Footer.module.scss';

export default function Footer() {
    return(
        
        <footer className={styles.footer}>    
            <div className={styles.footer_items}>
                <p>Made by <a href="https://www.tedxcmu.org/" target="_blank">TEDxCMU</a></p>
                
                <p>
                    <a href="/login">About This Site</a>&#160; &middot; &#160;
                    <a href="/login">Admin Login</a>
                </p>
            </div>
        </footer>
    )
}