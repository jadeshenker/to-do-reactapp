import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Completed(props) {
    return(
        <Row className="completed-wrapper shadow-sm p-3 mb-3 mr-1 ml-1 rounded">
            <Col className="completed-item"> 
                <i className="fas fa-check"></i>{props.todo.todo}
            </Col>
        </Row>
    )
}

export default Completed;