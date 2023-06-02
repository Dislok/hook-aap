import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {
    const {description, onInputChange, resetForm} = useForm({
        description: ""

    })

    const onFormSubmit = ( event ) =>{
        event.preventDefault();
        if (description.length === 0) return;

        const newTodo ={
            id: new Date().getTime(),
        description, 
        done: false,
        }
        
        onNewTodo(newTodo);
        resetForm();
         }
  return (
    <form onSubmit={onFormSubmit}>
            <input
            type="text"
            placeholder="Pendiente"
            className="form-control"
            name="description"
            value={ description}
            onChange={ onInputChange}
            />
            <button type="submit"
                    className="btn btn-outline-primary mt-1"
            > Agregar</button>
        </form>
  )
}
