import React, { createContext } from "react";


export const stateContext = createContext()


export function TodosProvider(props) {
    const [state, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer)

    return (
        <StateContext.Provider value={todos}>
                {props.children}
        </StateContext.Provider>
    )
}
