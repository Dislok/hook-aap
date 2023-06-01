import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( interaciones = 100) =>{
    for( let i =0; i<interaciones; i++){
        console.log("ahi vamos..");
    }
    return `${interaciones} interaciones realizadas`
}

export const MemoHook = () => {
    const {contador, incrementar} = useCounter(4000);
    const [show, setShow] = useState(true)

    const valormemoria = useMemo(() => heavyStuff(contador), [contador])
  return (
    <>
    <h1>Counter: <small>{contador}</small> </h1>
    <hr/>
    <h4>{ valormemoria}</h4>
    <button
        className="btn btn-primary"
        onClick={() => incrementar()}
    >
        +1
    </button>
    <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
    >
        show/hide { JSON.stringify(show)}
    </button>
    </>
  )
}
