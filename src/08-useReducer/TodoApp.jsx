import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

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
    
export const TodoApp = () => {
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
  return (
    <>
    <h1>Todo App: 10, <small> Pendintes: 2</small></h1>
    <hr/>
    <div className="row">
    <div className="col-7">
    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
    </div>
    <div className="col-5">
        <h4>Agregar Todo</h4>
        <hr/>
        <TodoAdd onNewTodo={handleNewTodo}/>
    </div>
    </div>
    </>
  )
}
