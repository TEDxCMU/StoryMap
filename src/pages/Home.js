import StoryList from '../components/storyList';
import StorySubmit from '../components/storySubmit';
import StoryMapView from '../components/StoryMapView/StoryMapView';

export default function Home() {
    return (
        <>
            <StoryMapView />
            <br></br>
            <h1>List of Stories:</h1>
            <StoryList />
            <br></br>
            <h1>Submit a Story:</h1>
            <StorySubmit />
        </>
    );
}
