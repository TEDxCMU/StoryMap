import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import styles from './AdminConsole.module.css';
import { useAuth } from '../../lib/auth-provider';
import StoryService from "../../services/story.service";

function AdminConsole() {
    const AuthContext = useAuth();
    const history = useHistory();
    const [pendingStories, setPendingStories] = useState([]);

    useEffect(() => {
        if (!AuthContext.user) {
            history.push("/login");
            return;
        }

        (async function () {
            const allData = StoryService.getAll()
            const response = await allData.get();
            const newStories = [];
            response.docs.forEach((doc) => {
                const data = doc.data();
                if (!data.approved) {
                    newStories.push({ id: doc.id, ...data });
                }
            });
            setPendingStories(newStories);
        })();
    }, [history, AuthContext]);

    const deleteStory = (id) => {
        const newList = pendingStories.filter((item) => item.id !== id);
        setPendingStories(newList);
        StoryService.delete(id);
    };

    const approveStory = (id) => {
        const newList = pendingStories.filter((item) => item.id !== id);
        setPendingStories(newList);
        StoryService.update(id, { approved: true });
    };

    return (
        <>
            <h1 className={styles.title}>Admin Dashboard</h1>
            <section className={styles.stories}>
                <h2 className={styles.subtitle}>Pending Stories</h2>
                {pendingStories?.map(({ id, name, email, prompt, story }) => (
                    <div key={id} className={styles.story}>
                        <p className={styles.text}>
                            <i>Name</i>: {name}
                        </p>
                        <p className={styles.text}>
                            <i>Email</i>: {email}
                        </p>
                        <p className={styles.text}>
                            <i>Prompt</i>: {prompt}
                        </p>
                        <p className={styles.text}>
                            <i>Story</i>: {story.text}
                        </p>
                        <button className={cn(styles.button, styles.approve)} onClick={() => approveStory(id)}>
                            Approve
                        </button>
                        <button className={cn(styles.button, styles.delete)} onClick={() => deleteStory(id)}>
                            Delete
                        </button>
                        <br></br>
                    </div>
                ))}
            </section>
        </>
    )
}

export default AdminConsole;
