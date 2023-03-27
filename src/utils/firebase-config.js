import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyBqmHniX0T_KRKzIfjLGMV0I6dv5hUy2ZY",
    authDomain: "react-netflix-clone-8fe5d.firebaseapp.com",
    projectId: "react-netflix-clone-8fe5d",
    storageBucket: "react-netflix-clone-8fe5d.appspot.com",
    messagingSenderId: "548247368699",
    appId: "1:548247368699:web:bd7424b215eec6066bd15e",
    measurementId: "G-0HMNYVM6QT"
  };
  const app = initializeApp(firebaseConfig);
  export const firebaseAuth= getAuth(app);