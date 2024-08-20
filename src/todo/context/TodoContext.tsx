import { createContext } from "react";
import { TodoSatate } from "../interfaces/interfaces";

export interface TodoContextProps {
    todoState: TodoSatate,
    toggleTodo: (id: string) => void

}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)