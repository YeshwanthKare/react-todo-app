import firebase from "firebase"



const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyCQW7xw_QU6R3Nv8R-X4nPVaGu2XmG4A2c",
  authDomain: "react-todo-app-ea10d.firebaseapp.com",
  projectId: "react-todo-app-ea10d",
  storageBucket: "react-todo-app-ea10d.appspot.com",
  messagingSenderId: "109427447421",
  appId: "1:109427447421:web:76382878c9a1d3675a0314",
  measurementId: "G-N4RY7GE1F3"
});

const db = firebaseApp.firestore();

export default db

