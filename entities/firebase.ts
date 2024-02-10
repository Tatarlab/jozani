/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  connectFunctionsEmulator, getFunctions, httpsCallable, 
} from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCzkutGKAd3IH7BDaSUqofeQ0Qtysrgs_4',
  authDomain: 'jozani-project.firebaseapp.com',
  projectId: 'jozani-project',
  storageBucket: 'jozani-project.appspot.com',
  messagingSenderId: '349358848836',
  appId: '1:349358848836:web:06def818cbc7884f0f3511',
  measurementId: 'G-TCVPKXYQ8J'
};

const initialize = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  // Initialize Firebase
  const app = initializeApp(FIREBASE_CONFIG);
  const analytics = getAnalytics(app);
  const functions = getFunctions(app);

  if (process.env.NODE_ENV !== 'production') {
    connectFunctionsEmulator(functions, 'localhost', 5001);
  }

  return {
    app,
    analytics,
    functions,
  };
};

// Executes on client side only
const {
  app,
  analytics,
  functions,
} = initialize();

export const getFirebaseCallable = (name: string) => httpsCallable(functions || {} as any, name);