import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    const todos=props.tasks.map((todo, index) => {
        return <Todo todo={todo} key={index} id={index} onDelete={props.onDelete} onComplete={props.onComplete} dateDisplay={props.dateDisplay}/>
    })

    return(
        <div>
            {todos}
        </div>
    );
}

export default TodoList;