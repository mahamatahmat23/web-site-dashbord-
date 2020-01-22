import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBUK983OQ46zAHMQ8MKXsk2aOv1UdVTQM4",
  authDomain: "web-project-75d02.firebaseapp.com",
  databaseURL: "https://web-project-75d02.firebaseio.com",
  projectId: "web-project-75d02",
  storageBucket: "web-project-75d02.appspot.com",
  messagingSenderId: "998994738676"
  };
  firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;