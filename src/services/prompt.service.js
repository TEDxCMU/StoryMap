import { firestore } from "../firebase";

const db = firestore.collection("prompts");

class PromptService {
    getAll() {
        return db;
    }

    add(prompt) {
        return db.add(prompt);
    }

    update(id, value) {
        return db.doc(id).update(value);
    }

    delete(id) {
        return db.doc(id).delete();
    }
}

const instance = new PromptService();

export default instance;