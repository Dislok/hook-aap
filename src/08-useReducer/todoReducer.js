


export const todoReducer = (initialState =[], action) => {

    switch (action.type) {
        case "Nuevo elemento TODO":
            
          return[...initialState, action.payload ]
          case "Eliminar elemento TODO":
            
          return initialState.filter(todo => todo.id !==action.payload)
    
        default:
           return initialState;
    }
  
}
