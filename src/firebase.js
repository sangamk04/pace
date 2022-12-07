// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9u8M6S-MSDIq8FZlxtMV2cMAs6bSpCi8",
  authDomain: "sangam-7474a.firebaseapp.com",
  projectId: "sangam-7474a",
  storageBucket: "sangam-7474a.appspot.com",
  messagingSenderId: "511470917064",
  appId: "1:511470917064:web:38ee744ad89c06e51d5cfd",
  measurementId: "G-CRLJ0FGW9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider= new GoogleAuthProvider();

export const signInWithGoogle = ()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result)

        // const name = result.user.displayName;

        // localStorage.setItem("name",name)


    }).catch(error => console.log(error))
}