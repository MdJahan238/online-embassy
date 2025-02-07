import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
//export dewa hoise karon eta amra onno jaygay use korbo


export const AuthContext = createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState()
    //create user
    const createUser = (email,password)=>{
      return   createUserWithEmailAndPassword (auth,email,password);
    };


    //sign in user
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

      //user update
      const updateUser =(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
      }

      //logout
      const logOut =()=>{
        return signOut(auth);
      }

      //track user : login or not?
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
        },[]);
        return ()=>unsubscribe();
      });

    const authInfo ={
      createUser,
      signIn,
      updateUser,
      user,
      logOut,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;