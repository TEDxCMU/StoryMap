import { useState, useEffect, useRef } from "react";
import StoryService from "../../services/story.service";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import promptList from "../../lib/prompts.js";

import styles from './StorySubmit.module.scss';

export default function StorySubmit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [latLong, setLatLong] = useState({ lat: 0, lng: 0 });
  const [prompt, setPrompt] = useState("");
  const [storyText, setStoryText] = useState("");
  const [submitted, setSubmitted] = useState("");


  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API;

  Geocode.setApiKey(apiKey);
  Geocode.setLanguage("en");
  Geocode.setRegion("en");

  const setLocationInfo = (e) => {
    console.log(e)
    setCity(e);
    Geocode.fromAddress(e).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatLong({ lat, lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    let newStory = {
      name: name,
      email: email,
      city: city,
      latLong: latLong,
      prompt: prompt,
      story: {
        text: storyText
      },
      approved: false
    };

    StoryService.add(newStory);
  };

  const allRequiredFields = () => {
    return name && storyText && email;//city
  }

  
  return (
    <div>
      <h1>Share Your Story:</h1>
      {!submitted && (
        <form onSubmit={handleSubmit} className={styles.formBody} id="modal-body">
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='city'>Your City</label>
            <GooglePlacesAutocomplete
              apiKey={apiKey}
              selectProps={{
                city,
                onChange: (e) => setLocationInfo(e.label),
                id: "city",
                styles: {
                  container: (provided) => ({
                    ...provided,
                    width: 300
                  })
                },
                required: true
              }}
            />
          </div>
          <div>
            <label htmlFor='prompt'>Choose a prompt:</label>
              <select onChange={(e) => setPrompt(e.target.value)}>
                {promptList?.map((promptStr) => (
                  <option value={promptStr}>{promptStr}</option>
                ))}
              </select>
          </div>
          <div>
            <label htmlFor='story'>Your Story</label>
            <textarea
              id='story'
              rows='10'
              cols='30'
              onChange={(e) => setStoryText(e.target.value)}
              required
            />
          </div>
          <div><input className={styles.submit} type='submit' value='SUBMIT' disabled={!allRequiredFields()}/></div>
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
