


export const todoReducer = (initialState =[], action) => {

    switch (action.type) {
        case "Nuevo elemento TODO":
        return[...initialState, action.payload ]
          
        case "Eliminar elemento TODO":
        return initialState.filter(todo => todo.id !==action.payload)
          
        case "Marcar elemento TODO":
        return initialState.map( todo =>{
          if(todo.id === action.payload){
            return {
              ... todo,
              done: !todo.done
            }
          }
          return todo;
        })
    
        default:
           return initialState;
    }
  
}
