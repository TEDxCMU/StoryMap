import styles from './Home.module.scss';
import AdminConsole from '../components/AdminConsole/AdminConsole';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AdminConsolePage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                <AdminConsole />
            </div>
            <Footer />
        </div>
    );
}

export default AdminConsolePage;
