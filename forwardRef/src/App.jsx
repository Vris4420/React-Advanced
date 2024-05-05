import { useRef } from "react"
import { CustomInput } from "./CustomInput";


function App() {

  const inputRef = useRef()

  function handleSubmit(e){
    e.preventDefault();
    console.log(inputRef.current.value)
  }

  return (
  <>
  <h2>Demostration of forwardRef function</h2>
    <form onSubmit={handleSubmit}>
      <CustomInput ref={inputRef}/>
      <button type="submit">Submit</button>
    </form>
  </>
  )
}



export default App
