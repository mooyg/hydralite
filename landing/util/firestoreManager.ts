import firebase from "firebase";
import "firebase/firestore";

import { firebaseConfig } from "./firestoreConfig";

export default class FirestoreManager {
    initialize() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app(); // if already initialized, use that one
        }
    }

    validateEmail(email: string) {
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        return re.test(String(email).toLowerCase());
    }

    setEmail(email: string) {
        this.initialize();
        firebase
            .firestore()
            .collection("waitlist")
            .doc(email)
            .set({
                email: email,
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }
}
