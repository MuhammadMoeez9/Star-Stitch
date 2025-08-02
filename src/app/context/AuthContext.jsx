// context/AuthContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/components/ui/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/components/ui/Firebase"; // Make sure `db` is exported from Firebase config
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDocRef);

        if (userSnap.exists()) {
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            role: userSnap.data().role || "User", // fallback role
          });
        } else {
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            role: "User",
          });
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
