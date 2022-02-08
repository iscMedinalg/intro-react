import React from 'react';
import '../css/TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function TodoItem(props) {
    
    return(
        <li className="TodoItem">
            
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--activate'}`}
            onClick={props.onComplete}
            >
                <FontAwesomeIcon icon={faCheckCircle} id="IconCheck"/>
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>

            <span className='Icon Icon-delete'
            onClick={props.onDelete}
            >
                <FontAwesomeIcon icon={faTrashAlt} id="IconDelete"/>
            </span>
        </li>
    );
}

export {TodoItem};