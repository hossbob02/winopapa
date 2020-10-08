
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBvflXvoowxONJ97_ZrXVmkujkci47KDGw",
    authDomain: "winopapa-team.firebaseapp.com",
    databaseURL: "https://winopapa-team.firebaseio.com",
    projectId: "winopapa-team",
    storageBucket: "winopapa-team.appspot.com",
    messagingSenderId: "355366685374",
    appId: "1:355366685374:web:0b0cfa2fcd7953f3d02cef",
    measurementId: "G-SCE9GJ9VSC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;