// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiQv5SLPiKIW9fE1hbNMgXPS0j7kxbZsk",
    authDomain: "food-restorent-7c3cc.firebaseapp.com",
    projectId: "food-restorent-7c3cc",
    storageBucket: "food-restorent-7c3cc.appspot.com",
    messagingSenderId: "453396599539",
    appId: "1:453396599539:web:272d23d934a886f37edd86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;