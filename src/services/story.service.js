import firebase from "../firebase";

const db = firebase.collection("/stories");

class StoryService {
    getAll() {
        return db;
    }

    add(story) {
        return db.add(story);
    }
}

export default new StoryService();
