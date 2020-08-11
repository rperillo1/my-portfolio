import React, { createContext, useState } from "react";


export const stateContext = createContext()


export function TodosProvider(props) {
    const [state, dispatch] = useState("todos", defaultTodos, todoReducer)

    return (
        <StateContext.Provider value={todos}>
                {props.children}
        </StateContext.Provider>
    )
}
