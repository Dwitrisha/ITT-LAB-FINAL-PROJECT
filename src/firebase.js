
import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCPP-aqfighYUKFpINpFaxiyXyVmC-rNPo",
  authDomain: "moody-4b0c4.firebaseapp.com",
  projectId: "moody-4b0c4",
  storageBucket: "moody-4b0c4.appspot.com",
  messagingSenderId: "338098658985",
  appId: "1:338098658985:web:46b1427d7c22276222d3b8",
  measurementId: "G-7C8VNR4XEF"
};
  

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export  {db,storage};
