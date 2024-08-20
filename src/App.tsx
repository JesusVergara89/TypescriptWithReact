import { Counter } from "./components/Counter"
import { Counterreducer } from "./components/Counterreducer"
import { FatherTimer } from "./components/FatherTimer"
import { User } from "./components/User"

function App() {

  return (
      <div> 
        <h1>React + Typescript</h1>
        <hr />
        <Counter/>
        <hr />
        <User/>
        <hr />
        <h1>UseEffect - useRef</h1>
        <hr />
        <FatherTimer/>
        <hr />
        <Counterreducer/>
      </div>
  )
}

export default App
