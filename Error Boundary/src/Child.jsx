import { useEffect } from "react"

export function Child(){

    // Error boundaries will not work in async or event listener
    // Error boundaries works in react rendering


    useEffect(() => {
        throw new Error("Component")
    })

    throw new Error("Component")
    return <h2>Child</h2>

}
