import firebase from "../firebase";

const db = firebase.collection("/stories");

class StoryService {
    getAll() {
        return db;
    }

    add(story) {
        return db.add(story);
    }

    update(id, value) {
        return db.doc(id).update(value);
    }
    
    delete(id) {
        return db.doc(id).delete();
    }
}

export default new StoryService();
