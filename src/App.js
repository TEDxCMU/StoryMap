import './App.css';
import StoryList from "./components/storyList.js";
import StorySubmit from "./components/storySubmit.js";
import AdminConsole from "./components/adminConsole.js";

function App() {
    return (
        <div className="App">
            <h1>List of Stories:</h1>
            <StoryList />
            <br></br>
            <h1>Submit a Story:</h1>
            <StorySubmit />
            <h1>Admin Console Base Func:</h1>
            <AdminConsole />
        </div>
    );
}

export default App;
