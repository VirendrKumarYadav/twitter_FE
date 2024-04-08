import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFuRcgGXIYDRJHRMc-FvIxy75LV-ZOJzk",
  authDomain: "loginwith-7e45b.firebaseapp.com",
  projectId: "loginwith-7e45b",
  storageBucket: "loginwith-7e45b.appspot.com",
  messagingSenderId: "920507988202",
  appId: "1:920507988202:web:e61806f359ac842240ff93",
  measurementId: "G-4F2X4WGR1J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore=getFirestore(app);
export const storage = getStorage(app);

