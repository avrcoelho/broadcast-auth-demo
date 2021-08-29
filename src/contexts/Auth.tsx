import React, { createContext, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

export interface AuthContextData {
  signIn(): void;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const authBroadcast = new BroadcastChannel("@authBroadcast");

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const signIn = useCallback(() => {
    history.replace("/dashboard");
    authBroadcast.postMessage("signIn");
  }, []);

  const signOut = useCallback(() => {
    history.replace("/");
    authBroadcast.postMessage("signOut");
  }, []);

  const broadcastActions = {
    signIn: () => history.replace("/dashboard"),
    signOut: () => history.replace("/"),
  };

  useEffect(() => {
    authBroadcast.onmessage = (message) => {
      const data: keyof typeof broadcastActions = message.data;
      broadcastActions[data]();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
