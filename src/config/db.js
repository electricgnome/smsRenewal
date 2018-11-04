import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCAIQZNVv8Q2vBY2OYqbBbadeXtHnsVfuQ",
    authDomain: "smsrenewal.firebaseapp.com",
    databaseURL: "https://smsrenewal.firebaseio.com",
    projectId: "smsrenewal",
    storageBucket: "smsrenewal.appspot.com",
    messagingSenderId: "45552393564"
  };

let appdb = firebase.initializeApp(config)
export const db = appdb.database()