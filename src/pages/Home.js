import StoryList from '../components/storyList';
import StorySubmit from '../components/StorySubmit/StorySubmit';
import StoryMapView from '../components/StoryMapView/StoryMapView';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import InfoPanel from '../components/InfoPanel/InfoPanel';

const container = {
    position: 'relative',
    minHeight: '100vh'
};

const content = {
    paddingBottom: '5rem'
};

export default function HomePage() {
    return (
        <div style={container}>
            <div style={content}>
                <Header />
                <InfoPanel />
                <StoryMapView />
            </div>
            <Footer />
        </div>
    );
}
