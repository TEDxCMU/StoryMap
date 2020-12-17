import { useState } from "react";
import StoryService from "../services/story.service";

export default function LoginForm() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [prompt, setPrompt] = useState("");
    const [storyText, setStoryText] = useState("");
    const [submitted, setSubmitted] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true)
      let newStory = {
        name: name,
        city: city,
        // TODO: change this to extract the appx geopoint of the city they selected
        // and add a latLong field
        story: storyText,
        approved: false
      };

      StoryService.add(newStory)
    }
    return (
        <div>
            {!submitted && (
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                    </div>
                    {/* TODO: Change this to a city selector drop down - prob need to import some package */}
                    <div>
                    <label htmlFor="city">Your City</label>
                    <input
                    type="text"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                    required
                    />
                    </div>
                    {/* TODO: Also include a prompt dropdown which can select between the three prompts we have (see notion) */}
                    <div>
                    <label htmlFor="story">Your Story</label>
                    <textarea
                    id="story"
                    rows="10" 
                    cols="30"
                    onChange={(e) => setStoryText(e.target.value)}
                    required
                    />
                    </div>
                    <input type="submit" />
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