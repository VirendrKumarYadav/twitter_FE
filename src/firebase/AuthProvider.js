import React, { useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";


const AuthContext = React.createContext();
export function useAuthContext() {
  return useContext(AuthContext);
}

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  const signUp = (email, password) => {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      return err;
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sign_out = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    console.log("google sign");
    return signInWithPopup(auth, provider)
  
}
  
  const value = {
    signUp,
    signIn,
    sign_out,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
export default AuthProvider;
