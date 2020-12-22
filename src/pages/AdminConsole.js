import { useState, useEffect } from "react";
import StoryService from "../services/story.service";

export default function AdminConsole() {
    const [pendingStories, setPendingStories] = useState([]);

    useEffect(() => {
        const allData = StoryService.getAll()
        const fetchedStories = []

        // same code as storyList, only diff is show all unapproved posts
        allData.get()
        .then(response => {
            response.docs.forEach(document => {
                if (!document.data().approved) {
                    const fetchedStory = {
                        id: document.id,
                        name: document.data().name,
                        storyText: document.data().story.text
                    };
                    fetchedStories.push(fetchedStory);
                }
            });
            setPendingStories(fetchedStories);
        });
    }, [])

    const deleteStory = (id) => {
        StoryService.delete(id)
    }

    const approveStory = (id) => {
        StoryService.update(id, {
            approved: true,
          })
    }

    return (
        <div>
            {/* TODO: Make each part disappear when approve or delete clicked */}
            {pendingStories?.map(({ id, name, storyText }) => (
                <div>
                    <p>{name}: {storyText}</p>
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
