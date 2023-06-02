import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState =[
    {
        id: new Date().getTime(),
        description: "terminar curso", 
        done: false,
    },
    {
        id: new Date().getTime(),
        description: "terminar curso XD", 
        done: false,
    }
]
todoReducer
export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState )
  return (
    <>
    <h1>Todo App</h1>
    <hr/>
    <ul>
        <li> Item 1 </li>
        <li> Item 2 </li>
        <li> Item 3 </li>

    </ul>
    </>
  )
}
