import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBeV9NF9Qs0GWAYxIT1ZgCcER0dFm75tr0",
    authDomain: "biblioteca-eletronica3.firebaseapp.com",
    projectId: "biblioteca-eletronica3",
    storageBucket: "biblioteca-eletronica3.appspot.com",
    messagingSenderId: "225245732683",
    appId: "1:225245732683:web:6dbc8bb6742941212f92ce",
    measurementId: "G-PHH3HWDGNN"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore(); 