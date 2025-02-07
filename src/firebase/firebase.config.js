import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyACWhVkUFOLRbcERmaHYWlXmmvOjEoITF4",
  authDomain: "visa-f8e15.firebaseapp.com",
  projectId: "visa-f8e15",
  storageBucket: "visa-f8e15.firebasestorage.app",
  messagingSenderId: "408345303611",
  appId: "1:408345303611:web:c8b76a3b55c574e6acda1e"
};


/*  apiKey:import.meta.env.REACT_APP_ApiKey, 
  authDomain:import.meta.env.REACT_APP_AuthDomain ,
  projectId:import.meta.env.REACT_APP_ProjectId,
  storageBucket:import.meta.env.REACT_APP_MtorageBucket,
  messagingSenderId:import.meta.env.REACT_APP_MessagingSenderId ,
  appId:import.meta.env.REACT_APP_AppId ,
   */
/* 

*/
const app = initializeApp(firebaseConfig);
export default app;