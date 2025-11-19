// src/services/authService.ts
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const authService = {
  signUp: async (email, password) => {
    // In a real app, you would have more robust error handling
    return await createUserWithEmailAndPassword(auth, email, password);
  },

  login: async (email, password) => {
    // In a real app, you would have more robust error handling
    return await signInWithEmailAndPassword(auth, email, password);
  },

  logout: async () => {
    return await signOut(auth);
  },

  getCurrentUser: () => {
    return auth.currentUser;
  },
};
