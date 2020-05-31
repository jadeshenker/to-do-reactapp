import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

function Todo(props) {
    return(
        <Row className="task-wrapper shadow-sm p-3 mb-3 mr-1 ml-1 rounded">
            <Col className="task-item"> 
                {props.content}
            </Col>
            <Col xs={2} className="delete-btn">
                <Button 
                    variant="dark"
                    onClick={() =>
                        {props.onDelete(props.id)}} >
                    <i class="fas fa-trash"></i>
                </Button>
            </Col>
        </Row>
    );
}

export default Todo;