import { createContext, useEffect, useState } from "react";

export let UserContext = createContext(0);

export default function CounterContextProvider(props) {


    const [UserLogin, setUserLogin] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            setUserLogin(localStorage.getItem('userToken'))
        }
    }, [])

    return <>

        <UserContext.Provider value={{ UserLogin, setUserLogin }}>
            {props.children}
        </UserContext.Provider>

    </>
}