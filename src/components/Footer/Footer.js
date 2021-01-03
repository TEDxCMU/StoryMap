import styles from './Footer.module.scss';

export default function Footer() {
    return(
        <div>
            <footer class={styles.footer}>    
                <hr/>
                <br></br>
                <div>
                    <a href="/login">Admin Login</a>
                    <p>Made by TEDxCMU</p>
                </div>
            </footer> 
        </div>
    )
}