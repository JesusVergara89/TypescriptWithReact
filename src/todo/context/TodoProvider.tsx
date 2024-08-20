import { useReducer } from "react"
import { TodoSatate } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"

const INITIAL_STATE: TodoSatate = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: "Description",
            completed: false
        },
        {
            id: '2',
            desc: "Description2",
            completed: false
        },
    ],
    completed: 2,
    pending: 2
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: Props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

const toggleTodo = (id: string) => {
    dispatch({
        action: 'toggleTodo',
        payload: {id}
    })
}

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
