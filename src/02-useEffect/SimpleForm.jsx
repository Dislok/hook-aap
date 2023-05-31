import React, { useEffect, useState } from 'react'
import { Mensaje } from './mensaje';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "Dislo",
        email: "dislo@gmail.com"
    })
    const { username, email}= formState;
    const onInputChange= ({target}) =>{
     const {name, value} = target;
     setFormState({
        ...formState,
        [name]: value
     })
    }
     useEffect(()=> {

     },[]);
     useEffect(()=> {

     },[formState]);
     useEffect(()=> {

     },[email]);


    
  return (
    <>
    <h1>Formulario simple</h1>
    <hr/>
    <input
     type="text"
     className="form-control"
     placeholder="Username"
     name="username"
     value={username}
     onChange={ onInputChange}
    />
    <input
     type="email"
     className="form-control mt-2" 
     placeholder="Correo"
     name="email"
     value={email}
     onChange={ onInputChange}
    />
    {
        (username === "Dislo2") && <Mensaje/>
    }
    </>
    
  )
}
