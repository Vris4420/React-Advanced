import { useState } from "react"

export function Counter(){
    const [count, setcount] = useState(0)
    return(
        <>
            <button onClick={() => setcount(c => c - 1)} >-</button>
            {count}
            <button onClick={() => setcount(c => c + 1)} >+</button>
        </>
    )
}