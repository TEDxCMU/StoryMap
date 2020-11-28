import firebase from "../firebase";

const db = firebase.collection("/stories");

class StoryService {
  getAll() {
    return db;
  }
}

export default new StoryService();