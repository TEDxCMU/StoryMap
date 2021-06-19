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
    const [deletedStories, setDeletedStories] = useState([]);

    useEffect(() => {
        if (!AuthContext.user) {
            history.push("/login");
            return;
        }

        (async function () {
            const allData = StoryService.getAll()
            const response = await allData.get();
            const penStories = [];
            const delStories = [];
            response.docs.forEach((doc) => {
                const data = doc.data();
                if (!data.approved && !data.deleted) {
                    penStories.push({ id: doc.id, ...data });
                }
                if (!data.approved && data.deleted) {
                    delStories.push({ id: doc.id, ...data });
                }
            });
            setPendingStories(penStories);
            setDeletedStories(delStories);
        })();
    }, [history, AuthContext]);

    const removeStory = (id) => {
        const newList = deletedStories.filter((item) => item.id !== id);
        setDeletedStories(newList);
        StoryService.delete(id);
    };

    const pendStory = (id) => {
        const delList = deletedStories.filter((item) => item.id !== id);
        const addToPen = deletedStories.filter((item) => item.id === id);
        let penList = pendingStories;
        penList = penList.concat(addToPen);
        setPendingStories(penList);
        setDeletedStories(delList);
        StoryService.update(id, { approved: false, deleted: false });
    };   

    const deleteStory = (id) => {
        const penList = pendingStories.filter((item) => item.id !== id);
        const addToDel = pendingStories.filter((item) => item.id === id);
        let delList = deletedStories;
        delList = delList.concat(addToDel);
        setPendingStories(penList);
        setDeletedStories(delList);
        StoryService.update(id, { approved: false, deleted: true });
    };

    const approveStory = (id) => {
        const newList = pendingStories.filter((item) => item.id !== id);
        setPendingStories(newList);
        StoryService.update(id, { approved: true, deleted: false });
    };

    return (
        <>
            <h1 className={styles.title}>Admin <span className={styles.span}>DASHBOARD</span></h1>
            <section className={styles.stories}>
                <h2 className={styles.subtitle}>Pending Stories</h2>
                {pendingStories?.map(({ id, name, email, prompt, story }) => (
                    <div key={id} className={styles.story}>
                        <p className={styles.text}>
                            <i>Name</i> : {name}
                        </p>
                        <p className={styles.text}>
                            <i>Email</i> : {email}
                        </p>
                        <p className={styles.text}>
                            <i>Prompt</i> : {prompt}
                        </p>
                        <p className={styles.text}>
                            <i>Story</i> : {story.text}
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

                <h2 className={styles.subtitle}>Deleted Stories</h2>
                {deletedStories?.map(({ id, name, email, prompt, story }) => (
                    <div key={id} className={styles.story}>
                        <p className={styles.text}>
                            <i>Name</i> : {name}
                        </p>
                        <p className={styles.text}>
                            <i>Email</i> : {email}
                        </p>
                        <p className={styles.text}>
                            <i>Prompt</i> : {prompt}
                        </p>
                        <p className={styles.text}>
                            <i>Story</i> : {story.text}
                        </p>
                        <button className={cn(styles.button, styles.pending)} onClick={() => pendStory(id)}>
                            Move To Pending
                        </button>
                        <button className={cn(styles.button, styles.remove)} onClick={() => removeStory(id)}>
                            Remove
                        </button>
                        <br></br>
                    </div>
                ))}
            </section>
        </>
    )
}

export default AdminConsole;
