import { Counter } from "./components/Counter"
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
      </div>
  )
}

export default App
