import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import firebase from '../../firebase';
import StoryService from "../../services/story.service";
import styles from './AdminConsole.module.scss';

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
                    // if (document.data().email) {}
                    const fetchedStory = {
                        id: document.id,
                        name: document.data().name,
                        prompt: document.data().prompt,
                        storyText: document.data().story.text,
                        email: document.data().email
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
        <div className={styles.adminParent}>
            <h1>Admin Console:</h1>
            {pendingStories?.map(({ id, name, email, prompt, storyText }) => (
                <div key={id} className={styles.storyBlock}>
                    <p> 
                        <b>{name}</b>
                        <br />
                        <r>{email}</r>
                        <br />
                        <i>{prompt}</i> 
                        <br />
                        {storyText}
                    </p>
                    <button className={styles.approveButton} onClick={() => approveStory(id)}>
                        Approve
                    </button>
                    <button className={styles.delButton} onClick={() => deleteStory(id)}>
                        Delete
                    </button>
                    <br></br>
                </div>        
            ))}
        </div>
    )
}