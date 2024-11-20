import { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
// Create Context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Sign Up
  const emailPassSignUp = (email, pass) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // Email-Pass Sign In
  const emailPassSignIn = (email, pass) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // Google Sign In
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Update Profile
  const updateUserProfile = (user = auth.currentUser, updateObj) => {
    setIsLoading(true);
    return updateProfile(user, updateObj);
  };
  // Sign Out
  const signOutUser = () => {
    return signOut(auth);
  };
  // Reset Password
  const resetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };

  // On Auth State Changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currUser => {
      currUser ? setUser(currUser) : setUser(null);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const contextValue = {
    isLoading,
    setIsLoading,
    user,
    emailPassSignUp,
    emailPassSignIn,
    googleSignIn,
    updateUserProfile,
    signOutUser,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
