// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  function b64DecodeUnicode(str) {
    return decodeURIComponent(
      atob(str)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  }
  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    // הופכים - ו_ לתווי Base64 רגילים
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = b64DecodeUnicode(base64);
    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      const user = parseJwt(savedToken);
      setToken(user);
      setRole(user?.role || "customer");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token"); 
    setToken(null); 
    setRole(null);
  };
  return (
    <AuthContext.Provider value={{ token, setToken, role, setRole,logout  }}>
      {children}
    </AuthContext.Provider>
  );
};
