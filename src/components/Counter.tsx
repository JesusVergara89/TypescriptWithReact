import { useState } from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increment = (number: number = 1): void => {
        setCounter( counter + number)
    } 

  return (
    <div className="mt-5">
        <h3>Counter</h3>
        <h3>{counter}</h3>
        <br />
        <button onClick={()=> increment()} className="btn btn-outline-primary mt-2">
            +1
        </button>
        <button onClick={()=> increment(2)} className="btn btn-outline-primary mt-2">
            +2
        </button>
        <button onClick={()=> setCounter(0)} className="btn btn-outline-primary mt-2">
            reset
        </button>
    </div>
  )
}
