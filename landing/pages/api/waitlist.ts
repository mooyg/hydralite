import { firebaseConfig } from './firestoreConfig'

// @ts-ignore
import firebase from 'firebase'
import 'firebase/firestore'

export default class FirestoreManager {
    initialize() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        } else {
            firebase.app() // if already initialized, use that one
        }
    }
    setEmail(email: string) {
        this.initialize()
        firebase
            .firestore()
            .collection('waitlist')
            .doc(email)
            .set({
                email: email,
            })
            .then(() => {
                console.log('Document successfully written!')
            })
            .catch((error) => {
                console.error('Error writing document: ', error)
            })
    }
}
