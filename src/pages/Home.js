import styles from './Home.module.scss';
import Header from '../components/Header/Header';
import InfoPanel from '../components/InfoPanel/InfoPanel';
import StoryMapView from '../components/StoryMapView/StoryMapView';
import Footer from '../components/Footer/Footer';

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                <InfoPanel />
                <StoryMapView />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
