import React, { Component } from "react";
import StoryService from "../services/story.service";

export default class StoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allStories: []
        };
    }

    componentDidMount(){
        let allData = StoryService.getAll()
        var fetchedStories = []

        // TODO: In order to get permissions for this, read and write were set to true
        // seems unsafe, we should fix that later
        allData.get()
        .then(response => {
            response.docs.forEach(document => {
                if (document.data().approved) {
                    const fetchedStory = {
                        id: document.id,
                        name: document.data().name,
                        storyText: document.data().story.text
                    };
                    fetchedStories.push(fetchedStory);
                }
            });
            this.setState({
                allStories: fetchedStories,
            });
        });

        
    }

    render(){
        let allStories = this.state.allStories
        return(
            <div>
                <ul>
                    {allStories && allStories.map(story => (
                        <li key={story.id}>{story.name}: {story.storyText}</li>
                    ))}
                </ul>
            </div>
        );
    }
}