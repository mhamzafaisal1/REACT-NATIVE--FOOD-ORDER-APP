import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtS1pAprOZtT6jm4JxXCZcA3V5KX9m2ZY",
  authDomain: "bagelsandpizza.firebaseapp.com",
  projectId: "bagelsandpizza",
  storageBucket: "bagelsandpizza.appspot.com",
  messagingSenderId: "302583583988",
  appId: "1:302583583988:web:3db0e5ce1d1f520b71baa1",
  measurementId: "G-X1Y8ZWH98N"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
