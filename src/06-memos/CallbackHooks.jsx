import { useCallback, useState } from "react"
import { IncrementarBot } from "./IncrementarBot";

export const CallbackHooks = () => {
    const [contador, setContador] = useState(10);
    const incrementoF = useCallback(
      (val) => {
         setContador((event) => event + val )
      },
      [],
    )
    
    // const incrementoF = () => {
    //     setContador(contador +1)
    // }
  return (
    <>
    <h1> useCallback Hook: {contador}</h1>
    <IncrementarBot incremento={incrementoF}/>
    </>

  )
}
