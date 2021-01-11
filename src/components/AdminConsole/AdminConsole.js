import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import firebase from '../../firebase';
import StoryService from "../../services/story.service";

export default function AdminConsole() {
    const history = useHistory();
    const [pendingStories, setPendingStories] = useState([]);

    useEffect(() => {
        if (!firebase.auth().currentUser) {
            history.push("/login");
            return;
        }

        const allData = StoryService.getAll()
        const fetchedStories = []

        allData.get()
        .then(response => {
            response.docs.forEach(document => {
                if (!document.data().approved) {
                    const fetchedStory = {
                        id: document.id,
                        name: document.data().name,
                        prompt: document.data().prompt,
                        storyText: document.data().story.text
                    };
                    fetchedStories.push(fetchedStory);
                }
            });
            setPendingStories(fetchedStories);
        });
    }, [history]);

    const deleteStory = (id) => {
        const newList = pendingStories.filter((item) => item.id !== id);
        setPendingStories(newList);      
        StoryService.delete(id);
    };

    const approveStory = (id) => {
        const newList = pendingStories.filter((item) => item.id !== id);
        setPendingStories(newList);
        StoryService.update(id, {
            approved: true,
        });
    };

    return (
        <div>
            {pendingStories?.map(({ id, name, prompt, storyText }) => (
                <div key={id}>
                    <p> <b>{name}</b>: <i>{prompt}</i> {storyText}</p>
                    <button onClick={() => approveStory(id)}>
                        Approve
                    </button>
                    <button onClick={() => deleteStory(id)}>
                        Delete
                    </button>
                    <br></br>
                </div>        
            ))}
        </div>
    )
}