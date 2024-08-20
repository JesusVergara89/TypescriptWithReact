export interface Todo {
   id: string
   desc: string
   completed: boolean 
} 

export interface TodoSatate {
    todoCount: number
    todos: Todo[]
    completed: number
    pending: number
}