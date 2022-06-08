import { createContext } from "react";


export const UserContext = createContext()

export const login = (name, password) => {
    if (name == "David" && password === "123") {

        console.log("it's your account (David)");
        return true;
    } else {
        console.log("it's not your account ");
        return false
    }
}


