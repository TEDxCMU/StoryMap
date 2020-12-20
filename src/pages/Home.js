import StoryList from '../components/storyList';
import StorySubmit from '../components/storySubmit';

export default function Home() {
    return (
        <>
            <h1>List of Stories:</h1>
            <StoryList />
            <br></br>
            <h1>Submit a Story:</h1>
            <StorySubmit />
        </>
    );
}
