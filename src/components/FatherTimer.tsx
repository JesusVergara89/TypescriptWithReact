import { useState } from "react"
import { Timer } from "./Timer"


export const FatherTimer = () => {

    const [milli, setMilli] = useState(1000)
    
  return (
    <div>
         <span>Milliseconds</span>
         <br />
         <button onClick={()=> setMilli(1000)} className="btn btn-outline-success">
            1000 Milliseconds
         </button>
         <button onClick={()=> setMilli(2000)} className="btn btn-outline-success">
            2000 Milliseconds
         </button>
         <Timer milli={milli}/>
    </div>
  )
}
