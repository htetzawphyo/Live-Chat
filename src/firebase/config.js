import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbZz84Z0EE8g2bpWBLKVclsyMQDQxHzOk",
    authDomain: "vue-blog-system-68a45.firebaseapp.com",
    projectId: "vue-blog-system-68a45",
    storageBucket: "vue-blog-system-68a45.appspot.com",
    messagingSenderId: "302821740385",
    appId: "1:302821740385:web:5dac6b3d0e0a1144c03f20"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {db, auth} ;