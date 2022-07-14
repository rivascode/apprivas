import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCN_y9SYyD4vbcttpcQ4WHbU7ofNDCGm60",
    authDomain: "galantry-man.firebaseapp.com",
    projectId: "galantry-man",
    storageBucket: "galantry-man.appspot.com",
    messagingSenderId: "761695672925",
    appId: "1:761695672925:web:824b4c117eaae592754bb4"
  };

 const app =  firebase.initializeApp(firebaseConfig);
 
 export const firestore = firebase.firestore(app);

export function getDocumentIdField() {
  return firebase.firestore.FieldPath.documentId()
}

export function getTimestamp() {
  return firebase.firestore.Timestamp.fromDate(new Date())
}