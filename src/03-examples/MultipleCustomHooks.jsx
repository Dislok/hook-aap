import { useCounter, useFetchs } from "../hooks";
import { Ima } from "./Ima";
import { Loading } from "./Loading";


useCounter
export const MultipleCustomHooks = () => {
  const {contador,incrementar, reducir,recetear} = useCounter(1);
    const {data, isLoading, hasError} = useFetchs(`https://rickandmortyapi.com/api/character/${contador}`);
    
    const{image, name} = data || {};
    
  return (
    <>
    <h1>BreakingBad Quotes </h1>
    <hr/>

    {
      isLoading ? <Loading/> : <Ima image={image} name={name}/>
    }
    
    
    
    <button onClick={()=>incrementar(1)} disabled={ isLoading} className="btn btn-primary">
      siguiente
    </button>
   

    </>
  )
}
