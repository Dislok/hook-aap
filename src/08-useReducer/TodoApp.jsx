import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "./useTodo"

 
    
export const TodoApp = () => {
    const {todos, handleDeleteTodo,handlOnToggleTodo,handleNewTodo,todosCount, pendingTodosCount} = useTodo();
    
  return (
    <>
    <h1>Todo App: { todosCount}, <small> Pendintes: {pendingTodosCount}</small></h1>
    <hr/>
    <div className="row">
    <div className="col-7">
    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo= {handlOnToggleTodo}/>
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
