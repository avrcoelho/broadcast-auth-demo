import React from "react";

import { useAuth } from "../hooks/useAuth";

export const SignIn = () => {
  const { signIn } = useAuth();

  return (
    <main>
      <h1>Sign in</h1>

      <button onClick={signIn}>Sign in</button>
    </main>
  );
};
