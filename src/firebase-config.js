import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa_tUiEjGeXuwq91knbPdhcI-iSEmqWok",
  authDomain: "books-app-8a775.firebaseapp.com",
  projectId: "books-app-8a775",
  storageBucket: "books-app-8a775.appspot.com",
  messagingSenderId: "543444965811",
  appId: "1:543444965811:web:4548c92d71cf158905d3c6",
  measurementId: "G-YEMYSFY7ML"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);