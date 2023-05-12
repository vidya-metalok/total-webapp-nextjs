import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { getStorage } from '@firebase/storage';
import { getFirestore } from "@firebase/firestore";
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCmWxBb-yJdlArLrGbrBB11tIXsECfH-g",
    authDomain: "ipl-2k22-78ce4.firebaseapp.com",
    databaseURL: "https://ipl-2k22-78ce4-default-rtdb.firebaseio.com",
    projectId: "ipl-2k22-78ce4",
    storageBucket: "ipl-2k22-78ce4.appspot.com",
    messagingSenderId: "952376688866",
    appId: "1:952376688866:web:822d7be417c6144e6fdebb"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app)
// const db = firebase.firestore;
// export default db
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const storage = getStorage()



export default db