import { createContext } from "react";

export const data = (user, password) => {
    if (user == "David" && password === "123") {
        return {
            username: "David",
            token: "123",
            userId: "1",
            playlist: ["1", "2", "3"]
        }
    }

    else if (user == "Chaya" && password == "456") {
        return {
            username: "Chaya",
            token: "123",
            userId: "2",
            playlist: ["1", "3"]
        }
    }
    else if (user == "Shira" && password == "789") {

        return {
            username: "Shira",
            token: "123",
            userId: "3",
            playlist: ["1", "2",]

        }
    }
    else {

        return {
            username: "all",
            token: "000",
            userId: "10",
            playlist: []
        }
    }
}


export const UserContext = createContext()
