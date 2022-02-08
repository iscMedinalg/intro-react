import React from 'react';
import '../css/CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <section className='SectionButton'>
            <button className='CreateTodoButton'
            onClick={onClickButton}
            >
            +</button>
        </section>
    );
}

export {CreateTodoButton};