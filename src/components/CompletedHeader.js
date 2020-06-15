import React from 'react';
import Button from 'react-bootstrap/Button';

function CompletedHeader(props) {
    return(
        <div className="tasks-header">
            <h1 className="todo-card-title d-inline-block">completed</h1>
                <Button
                    className="delete-btn"
                    variant="light"
                    onClick={() => props.onToggle()}
                    >
                    {!props.expand && "expand"}
                    {props.expand && "collapse"}
                </Button>
        </div>
    )
}

export default CompletedHeader;