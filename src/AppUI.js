import React from 'react';
import {TodoCounter} from './components/TodoCounter';
import {TodoContext} from './TodoContext';
import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoList';
import {TodoSearch} from './components/TodoSearch';
import {CreateTodoButton} from './components/CreateTodoButton';
import { Modal } from './Modal';
import {TodoForm} from './components/TodoForm'



function AppUI() {
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal, 
        setOpenModal,
    } = React.useContext(TodoContext);
    
    return(
    <React.Fragment>
        <TodoCounter />
        <TodoSearch/> 
        <TodoList> 
            {loading && <p>Cargando</p>}
            {error && <p>Desespérate, hubo un error</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}

            {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed} 
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            /> 
        ))}
        </TodoList>
        
        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}

        <CreateTodoButton 
            setOpenModal= {setOpenModal}
        /> 
     
    </React.Fragment>
    );
}
export {AppUI}