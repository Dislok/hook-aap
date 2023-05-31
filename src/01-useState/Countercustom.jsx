import {useCounter} from "../hooks/useCounter"

export const Countercustom = () => {
  
  const {contador,incrementar, reducir,recetear} = useCounter();
  return (
   <>
   <h1> Counter with Hook : {contador}</h1>
   <hr/>
   <button className="btn btn-primary" onClick = {()=>incrementar(2)} > +1</button>
   <button className="btn btn-primary" onClick = {recetear} > +reset</button>
   <button className="btn btn-primary" onClick = {()=>reducir(2)} > -1</button>
   </>
  )
}
