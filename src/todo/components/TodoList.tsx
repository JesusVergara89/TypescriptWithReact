import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoItem } from "./TodoItem"


export const TodoList = () => {

    const { todoState } = useContext(TodoContext)

    const { todos } = todoState


    return (
        <div>
            <ul>
                {
                    todos.map((item, index) => (
                        <TodoItem item={item} key={index}/>
                    ))
                }
            </ul>
        </div>
    )
}
