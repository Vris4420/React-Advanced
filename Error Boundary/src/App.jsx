import { useState } from "react"
import { Counter} from "./Counter"


export default function App (){
  const [changeDogs, setChangeDogs] = useState(false)

  return(
    <div>
      {changeDogs ? (
        <>
          <span># of dogs:</span> <Counter key="dogs"/>
        </>
      ):(
        <>
          <span># of Cats:</span> <Counter key="cats"/>
        </>
      )}
      <br/>
      <input type="number" key={changeDogs ? "dogs" : "cats"}/>
      <button onClick={() => setChangeDogs(d => !d)}>Switch</button>
    </div>
  )
}