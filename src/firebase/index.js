import * as firebase from 'firebase/app';
import 'firebase/firestore';
const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBX1LPn5ONt4tneM740dj7DTOVfzym0OB0",
        authDomain: "react-rabinovich.firebaseapp.com",
        projectId: "react-rabinovich",
        storageBucket: "react-rabinovich.appspot.com",
        messagingSenderId: "415764304001",
        appId: "1:415764304001:web:37a283bbd0c1aa17127d80",
        measurementId: "G-QG9HL4EK95"
      }
);
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}