import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer"

// initiale state 
const initialeState = {
    transactions: [
        { id: 1, text: 'flower', amount: 200 },
        { id: 2, text: 'salary', amount: 500 },
        { id: 3, text: 'books', amount: -30 },
        { id: 4, text: 'phone', amount: -100 },
    ]
}

// create context 

export const GlobalContext = createContext(initialeState)

// create provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer({ AppReducer, initialeState })

    return (<GlobalContext.Provider value={{ transactions: initialeState.transactions }}>
        {children}
    </GlobalContext.Provider>)
} 