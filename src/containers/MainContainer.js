import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import SubmitForm from '../components/SubmitForm';
import CompleteList from '../components/CompleteList';
import CompletedHeader from '../components/CompletedHeader';

class MainContainer extends React.Component {
    
    state = {
        tasks: JSON.parse(window.localStorage.getItem('tasks')) || [{
            todo: 'new todo', 
            month: new Date().getMonth(),
            day: new Date().getDate()
        }],
        completed: JSON.parse(window.localStorage.getItem('completed')) || [],
        expand: false
    };

    dateDisplay = (id) => {
        var month = this.state.tasks[id].month;
        var day = this.state.tasks[id].day;
        var currDate = new Date();
        var dateDisplay = '';
        if (currDate.getMonth() > month) {
            dateDisplay = 'over 1 month ago';
        }
        else {
            if(currDate.getDate() === day)
            {
                dateDisplay = 'today';
            }
            else {
                var elapsed = currDate.getDate() - day;
                dateDisplay = elapsed + ' days ago';
            }
        }
        return dateDisplay;
    }

    createNewTask = (input) => {
        const tasks = [...this.state.tasks];
        const task = {
            todo: input,
            dateCreated: new Date(),
            month: new Date().getMonth(),
            day: new Date().getDate()
        }
        tasks.push(task);
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState({tasks: tasks});
    }

    /* Remove the deleted task, reset the state to list of remaining elements */
    
    deleteTask = (index) => {
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState({tasks: tasks});
    }

    clearCompleted = () => {
        window.localStorage.removeItem('completed');
        this.setState({completed: []});
    }

    completeTask = (index) => {
        const tasks = [...this.state.tasks];
        const completed = [...this.state.completed];
        const todo = tasks[index].todo;
        tasks.splice(index, 1);
        completed.push({
            todo: todo
        });
        window.localStorage.setItem('completed', JSON.stringify(completed));
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState({tasks: tasks, completed: completed})
    }

    toggleCompleted = () => {
        var showAll = this.state.expand ? false: true;
        this.setState({expand: showAll});
    }

    render() {

        return(
            <Container fluid={true}>
                <h1 className="title-wrapper">todos</h1>
                <Row className="justify-content-center">
                    <Col xs={10} sm={10} lg={6} md={8} className="shadow p-3 mb-5 bg-white rounded">
                        <Header date={this.state.date} numTodos={this.state.tasks.length} />
                        <TodoList tasks={this.state.tasks} onDelete={this.deleteTask} onComplete={this.completeTask} dateDisplay={this.dateDisplay}/>
                        <SubmitForm onFormSubmit={this.createNewTask} />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={10} sm={10} lg={6} md={8} className="shadow p-3 mb-5 bg-white rounded">
                        <CompletedHeader expand={this.state.expand} onToggle={this.toggleCompleted}/>
                        {this.state.expand && <CompleteList tasks={this.state.completed} clearCompleted={this.clearCompleted}/>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainContainer;