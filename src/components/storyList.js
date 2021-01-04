import { useState, useEffect } from "react";
import StoryService from "../services/story.service";

export default function StoryList() {
    const [allStories, setAllStories] = useState([]);

    useEffect(() => {
        const allData = StoryService.getAll()
        const fetchedStories = []

        // TODO: In order to get permissions for this, read and write were set to true
        // seems unsafe, we should fix that later
        allData.get()
        .then(response => {
            response.docs.forEach(document => {
                if (document.data().approved) {
                    const fetchedStory = {
                        id: document.id,
                        name: document.data().name,
                        prompt: document.data().prompt,
                        storyText: document.data().story.text
                    };
                    fetchedStories.push(fetchedStory);
                }
            });
            setAllStories(fetchedStories);
        });
    }, [])

    return (
        <div>
            <ul>
                {allStories?.map(({ id, name, prompt, storyText }) => (
                    <li key={id}>
                        <b>{name}</b>: <i>{prompt}</i> {storyText}
                    </li>
                ))}
            </ul>
        </div>
    )
}
