import { useContext } from "react";
import { AuthContext, AuthContextData } from "../contexts/Auth";

export const useAuth = (): AuthContextData => useContext(AuthContext);
