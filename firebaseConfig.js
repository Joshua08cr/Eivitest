import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsxzB3bbkLmSk6oxPnxaOHhyDHZHRi_WY",
  authDomain: "eivi-7a2cb.firebaseapp.com",
  projectId: "eivi-7a2cb",
  storageBucket: "eivi-7a2cb.appspot.com",
  messagingSenderId: "168284679395",
  appId: "1:168284679395:web:8740de4d68b2dcc38ee9d6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
