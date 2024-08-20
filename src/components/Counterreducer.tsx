import { useReducer } from "react"

const initialState = {
    counter: 0,
}

type ActionType = 
| {action: 'increment'}
| {action: 'decrement'}
| {action: 'custom', payload: number}

const counterReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.action) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'custom':
            return {
                ...state,
                counter: action.payload
            }

        default:
            return state
    } 
}

export const Counterreducer = () => {
    const [counter, dispatch] = useReducer(counterReducer, initialState)
    return (
        <>
            <div>Counterreducer  {counter.counter}</div>
            <button onClick={() => dispatch({ action: 'increment' })} className="btn btn-outline-warning">
                reducer + 1
            </button>
            <button onClick={() => dispatch({ action: 'decrement' })} className="btn btn-outline-warning">
                reducer - 1
            </button>
            <button onClick={() => dispatch({ action: 'custom', payload: 100 })} className="btn btn-outline-primary">
                100
            </button>
        </>
    )
}
