import { createContext, useState } from "react";

 export let counterContext = createContext();

 export function CounterContextProvider(props){
    let [counter , setcounter] = useState(0);
    let [userName , setuserName] = useState("");

    function increaseCounter () {
        setcounter (Math.random())
    }
    function decreaseCounter () {
        setcounter (counter-1)
    }

    return <counterContext.Provider value={{userName, counter, increaseCounter}}>
        {props.children}
    </counterContext.Provider>
}

