import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDXJBI_wGCfnzdFyTfXo41xPnG9JmHyis",
  authDomain: "fb-oxa.firebaseapp.com",
  projectId: "fb-oxa",
  storageBucket: "fb-oxa.appspot.com",
  messagingSenderId: "936281738393",
  appId: "1:936281738393:web:c140d4ae37ee8848d4fc08",
  measurementId: "G-Q9HYHQFLEG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
