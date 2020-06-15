import React from 'react';
import Button from 'react-bootstrap/Button';
import Completed from './Completed';

function CompleteList(props) {
    const tasks=props.tasks.map((todo, index) => {
        return <Completed todo={todo} key={index} id={index} />
    })

    return(
        <div>
            {tasks}
            <Button
                className="form-text"
                variant="light"
                onClick={() => props.clearCompleted()}>
                clear completed
            </Button>
        </div>
    );
}

export default CompleteList;