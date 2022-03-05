import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjTgD61zwFLvjd8NmMVWuqpFim7tKYCwk",
  authDomain: "ecommerce-react-b0107.firebaseapp.com",
  projectId: "ecommerce-react-b0107",
  storageBucket: "ecommerce-react-b0107.appspot.com",
  messagingSenderId: "571607846123",
  appId: "1:571607846123:web:0b1d81eb9cc5776e0c82ae",
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

