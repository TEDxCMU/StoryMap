import { useState } from "react";
import Geocode from "react-geocode";

import styles from './StorySubmit.module.scss';
import StoryService from "../../services/story.service";
import prompts from "../../lib/prompts";

function StorySubmit({ latLong }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [prompt, setPrompt] = useState("");
    const [storyText, setStoryText] = useState("");
    const [submitted, setSubmitted] = useState("");

    const apiKey = process.env.REACT_APP_GOOGLE_MAP_API;

    Geocode.setApiKey(apiKey);
    Geocode.setLanguage("en");
    Geocode.setRegion("en");

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
            approved: false
        });
    };

    return (
        <div>
            <h1>Share Your Story:</h1>
            {!submitted && (
                <form onSubmit={handleSubmit} className={styles.formBody} id="modal-body">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            onChange={handleName}
                            value={name}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            onChange={handleEmail}
                            value={email}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="prompt">Choose a prompt:</label>
                        <select id="prompt" value={prompt} onChange={handlePrompt}>
                            {prompts.map((text, index) => (
                                <option key={index} value={text}>
                                    {text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="story">Your Story</label>
                        <textarea
                            id="story"
                            rows="10"
                            cols="30"
                            value={storyText}
                            onChange={handleStoryText}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={styles.submit}
                            type="submit"
                            disabled={!(name && storyText && email)}
                        />
                    </div>
                </form>
            )}
            {submitted && (
                <div>
                    <p>Submitted successfully! Thank you!</p>
                </div>
            )}
        </div>
    );
}

export default StorySubmit;
