import { useState } from "react";
import cn from 'classnames';

import styles from './StorySubmit.module.css';
import StoryService from '../../services/story.service';
import prompts from '../../lib/prompts';

function StorySubmit({ latLong }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [prompt, setPrompt] = useState(prompts[0]);
    const [storyText, setStoryText] = useState('');
    const [submitted, setSubmitted] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePrompt = (event) => {
        setPrompt(event.target.value);
    };

    const handleStoryText = (event) => {
        setStoryText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        StoryService.add({
            latLong,
            name,
            email,
            prompt,
            story: {
                text: storyText
            },
            approved: false,
            deleted: false
        });
    };

    return (
        <section>
            {!submitted && (
                <>
                    <h1 className={styles.title}>Share Your Story:</h1>
                    <form onSubmit={handleSubmit}>
                        <label className={styles.label}>
                            Start your story at your selected location: {latLong.lat.toFixed(4)}, {latLong.lng.toFixed(4)}
                        </label>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input
                            className={styles.input}
                            id="name"
                            type="text"
                            onChange={handleName}
                            value={name}
                            required
                        />
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            className={styles.input}
                            id="email"
                            type="text"
                            onChange={handleEmail}
                            value={email}
                            required
                        />
                        <label className={styles.label} htmlFor="prompt">Choose a prompt:</label>
                        <select className={styles.input} id="prompt" value={prompt} onChange={handlePrompt}>
                            {prompts.map((text, index) => (
                                <option key={index} value={text}>
                                    {text}
                                </option>
                            ))}
                        </select>
                        <label className={styles.label} htmlFor="story">Your Story</label>
                        <textarea
                            className={styles.input}
                            id="story"
                            rows="10"
                            cols="30"
                            value={storyText}
                            onChange={handleStoryText}
                            required
                        />
                        <button
                            className={cn(styles.submit, { [styles.disabled]: !(name && storyText && email) })}
                            type="submit"
                            disabled={!(name && storyText && email)}
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
            {submitted && (
                <p className={styles.success}>Submitted successfully! You will recieve an email when our team reviews and publishes your story. Thank you!</p>
            )}
        </section>
    );
}

export default StorySubmit;
