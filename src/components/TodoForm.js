import React from "react";
import { TodoContext } from '../TodoContext'
import '../css/TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    }
    return(
        <form className="ModalForm" onSubmit={onSubmit} >
        
            <label className="ModalLabel">Agregar Tarea</label>
            <textarea className="ModalText"
                value ={newTodoValue}
                onChange={onChange}
                
            />
        

        <div className="ModalButtons">
            <button
            className="Buttons"
            type="button"
            onClick={onCancel}
            >
                Cancelar
            </button>

            <button className="Buttons"
            type="submit"
            >
                Añadir
            </button>
        </div>

        </form>
    );
}

export {TodoForm}