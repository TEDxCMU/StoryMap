import StoryList from '../components/storyList';
import StorySubmit from '../components/StorySubmit/StorySubmit';
import StoryMapView from '../components/StoryMapView/StoryMapView';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const container = {
    position: 'relative',
    minHeight: '100vh'
};

const content = {
    paddingBottom: '6rem'
};

export default function HomePage() {
    return (
        <div style={container}>
            <div style={content}>
                <Header />
                <StoryMapView />
            </div>
            <Footer />
        </div>
    );
}
