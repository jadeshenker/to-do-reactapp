import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    const todos=props.tasks.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })

    return(
        <div>
            {todos}
        </div>
    );
}

export default TodoList;