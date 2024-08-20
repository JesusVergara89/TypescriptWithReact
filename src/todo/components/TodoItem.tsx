import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { Todo } from "../interfaces/interfaces"

interface Props {
    item: Todo
}

export const TodoItem = ({item}: Props) => {

  const {toggleTodo} = useContext(TodoContext)

    const handleBbClick = () => {
        toggleTodo(item.id)
    } 

  return (
    <li
    style={{
      cursor: 'pointer',
      textDecoration: item.completed ?  'line-through': '' 
    }}
    onClick={handleBbClick}
    >{item.desc}
    </li>
  )
}
