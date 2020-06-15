import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

function Todo(props) {
    return(
        <Row className="task-wrapper shadow-sm p-3 mb-3 mr-1 ml-1 rounded">
            <Col className="task-item"> 
                <p>{props.todo.todo}</p>
                <p className="time-elapsed">{props.dateDisplay(props.id)}</p>
            </Col>
            <Col xs={2} sm={4} md={4} lg={4}>
                <Button 
                    className="delete-btn"
                    variant="dark"
                    size="sm"
                    onClick={() =>
                        {props.onDelete(props.id)}} >
                    <i className="fas fa-trash"></i>
                </Button>
                <Button 
                    variant="light"
                    size="sm"
                    className="delete-btn"
                    onClick={() =>
                        {props.onComplete(props.id)}} 
                >
                    <i className="fas fa-check"></i>
                </Button>
            </Col>
        </Row>
    );
}

export default Todo;