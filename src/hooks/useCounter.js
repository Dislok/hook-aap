import { useState } from "react"

export const useCounter = (valorInicial =10) => {
    const [contador, setContador] = useState(valorInicial)

    const incrementar = (valor =1) => {
        setContador (contador +valor)
    }
    const reducir = (valor =1) => {
        if (contador===0)return;
        setContador (contador -valor)
    }
    const recetear = (valor =1) => {
        setContador (valorInicial)
    }
  return {
    contador,
    incrementar,
    reducir,
    recetear,
  }
}
