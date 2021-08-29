import React from "react";

import { useAuth } from "../hooks/useAuth";

export const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <main>
      <h1>Dashboard</h1>

      <button onClick={signOut}>Sign out</button>
    </main>
  );
};
