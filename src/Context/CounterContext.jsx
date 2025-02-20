import { createContext } from "react";

export let UserContext = createContext(0);

export default function UserContextProvider(props) {

    return <>

        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>

    </>
}