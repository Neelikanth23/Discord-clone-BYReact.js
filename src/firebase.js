import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAla5PFtazSLKJuU2-G685Skx9aInbQc1g",
  authDomain: "discord-clone-f3fc2.firebaseapp.com",
  databaseURL: "https://discord-clone-f3fc2.firebaseio.com",
  projectId: "discord-clone-f3fc2",
  storageBucket: "discord-clone-f3fc2.appspot.com",
  messagingSenderId: "509393661293",
  appId: "1:509393661293:web:5f4fed3dfbdc71605afe64",
  measurementId: "G-KLGKZK0TP4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
