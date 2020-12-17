import './App.css';
import StoryList from "./components/storyList.js";
import StorySubmit from "./components/storySubmit.js";

function App() {
    return (
        <div className="App">
            <h1>List of Stories:</h1>
            <StoryList />
            <br></br>
            <h1>Submit a Story:</h1>
            <StorySubmit />
        </div>
    );
}

export default App;
