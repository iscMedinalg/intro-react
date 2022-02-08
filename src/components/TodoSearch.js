import React from "react";
import '../css/TodoSearch.css';
import { TodoContext } from "../TodoContext";


function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
     const onChangeValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };
    return(
        <section className="SearchSection">
            <input 
                className="TodoSearch" 
                placeholder="Buscar Tarea"
                value={searchValue}
                onChange={onChangeValueChange}
            />
            
        </section>
    );
}

export {TodoSearch};