import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

export const useTodo = () => {
    const initialState =[ 
        // {
        //     id: new Date().getTime(),
        //     description: "terminar curso", 
        //     done: false,
        // },
        
    ]
    const init = () =>  {
        return JSON.parse( localStorage.getItem("todos") || [])
    }
    const [todos, dispatch] = useReducer(todoReducer, initialState, init )

    useEffect(() => {
      
     localStorage.setItem("todos", JSON.stringify( todos ))
     
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action={
            type: "Nuevo elemento TODO",
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo =(id) => {
        dispatch({
            
                type: "Eliminar elemento TODO",
                payload: id
            
        })
    }
    const handlOnToggleTodo =(id) => {
        
        dispatch({
            
                type: "Marcar elemento TODO",
                payload: id
            
        })
    }
    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => !todo.done).length;
  return {
    todos, handleDeleteTodo,handlOnToggleTodo,handleNewTodo, todosCount, pendingTodosCount
}
}
