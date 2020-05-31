import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import SubmitForm from '../components/SubmitForm';

class MainContainer extends React.Component {
    
    state = {
        tasks: ['your tasks will appear here', 'add or delete tasks']
    };



    createNewTask = (input) => {
        this.setState({tasks: [...this.state.tasks, input]});
    }

    /* Remove the deleted task, reset the state to list of remaining elements */
    
    deleteTask = (index) => {
        const taskArr = [...this.state.tasks];
        taskArr.splice(index, 1);
        this.setState({tasks: taskArr});
    }

    render() {

        return(
            <Container>
                <Row className="justify-content-center">
                    <Col xs={10} sm={10} lg={6} md={8} className="shadow p-3 mb-5 bg-white rounded">
                        <Header date={this.state.date} numTodos={this.state.tasks.length} />
                        <TodoList tasks={this.state.tasks} onDelete={this.deleteTask} />
                        <SubmitForm onFormSubmit={this.createNewTask} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainContainer;