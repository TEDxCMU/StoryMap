import StoryList from '../components/storyList';
import StorySubmit from '../components/StorySubmit/StorySubmit';
import StoryMapView from '../components/StoryMapView/StoryMapView';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
    return (
        <>
            <Header />
            <StoryMapView />
            <br></br>
            <h1>List of Stories:</h1>
            <StoryList />
            <br></br>
            <h1>Submit a Story:</h1>
            <StorySubmit />
            <Footer />
        </>
    );
}
