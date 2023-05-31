import { useState } from "react";

export const useForm = (estadoInicial) => {
    const [formState, setFormState] = useState(estadoInicial)
   
    const onInputChange= ({target}) =>{
     const {name, value} = target;
     setFormState({
        ...formState,
        [name]: value
     })
     }
     const resetForm = () => {
        setFormState(estadoInicial);
      };
    return{
        ... formState,
        formState,
        onInputChange,
        resetForm


 }
}
