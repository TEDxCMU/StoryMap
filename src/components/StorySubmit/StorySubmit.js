import { useState } from "react";
import StoryService from "../../services/story.service";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId
} from "react-google-places-autocomplete";

export default function StorySubmit() {
  const [name, setName] = useState("");
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
      city: city,
      latLong: latLong,
      story: {
        text: storyText
      },
      approved: false
    };

    StoryService.add(newStory);
  };
  return (
    <div>
      {!submitted && (
        <form onSubmit={handleSubmit}>
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
                }
              }}
            />
          </div>
          {/* TODO: Also include a prompt dropdown which can select between the three prompts we have (see notion) */}
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
          <input type='submit' />
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
