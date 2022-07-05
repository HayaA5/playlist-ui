import { createContext } from "react";


export const UserContext = createContext()

export const login = (name, password) => {
    if (name == "David" && password === "123") {
        return true;
    } else {
        return false
    }
}


