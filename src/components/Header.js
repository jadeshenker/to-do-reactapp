import React from 'react';

function Header(props)
{
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    var date = month + '.' + day + '.' + year;

    return(
        <div className="tasks-header">
            <div className="date-wrapper">
                <i className="far fa-clock"></i>
                <b className="date-info">{date}</b>
            </div>
            <h1 className="todo-card-title">today's tasks ({props.numTodos})</h1>
        </div>
    )
}

export default Header;