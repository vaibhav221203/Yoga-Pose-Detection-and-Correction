import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD35aVqOu5DKiJiMxAaYjzh3UFh44zxPBg",
  authDomain: "signin-signup-auth-d777e.firebaseapp.com",
  projectId: "signin-signup-auth-d777e",
  storageBucket: "signin-signup-auth-d777e.appspot.com",
  messagingSenderId: "728476841508",
  appId: "1:728476841508:web:86dcd73eda5094e46f4ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
