import React from 'react';
import DateInfo from './DateInfo';

function Header(props)
{

    return(
        <div className="tasks-header">
            <DateInfo />
            <h1 className="todo-card-title">today's tasks ({props.numTodos})</h1>
        </div>
    )
}

export default Header;