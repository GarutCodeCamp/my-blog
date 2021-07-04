import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDY3J1qD7FhMsGEAUHyRGRc2hez7IYTiHw",
    authDomain: "garut-code-camp.firebaseapp.com",
    projectId: "garut-code-camp",
    storageBucket: "garut-code-camp.appspot.com",
    messagingSenderId: "633294615657",
    appId: "1:633294615657:web:61a7215914e72fdded9ef8",
    measurementId: "G-3RQ5H1MP6R"
  };

  const init = firebase.initializeApp(firebaseConfig);
  export const firebaseAuth = init.auth();