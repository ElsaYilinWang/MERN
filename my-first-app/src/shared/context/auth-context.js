import { createContext } from "react";

export const AuthContext = createContext(
    {
        isLoggedIn: () => {},
        login: () => {},
        logout: () => {}
    }
);