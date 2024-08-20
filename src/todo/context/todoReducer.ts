import { Todo, TodoSatate } from "../interfaces/interfaces";

type ActionType = 
| {action: 'addTodo', payload: Todo }
| {action: 'toggleTodo', payload: { id: string} }


export const todoReducer = (state: TodoSatate, action: ActionType ): TodoSatate => {

    console.log({action})

    switch (action.action) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({...todo}) => {
                    if(todo.id === action.payload.id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}