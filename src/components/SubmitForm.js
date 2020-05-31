import React from 'react';
import {Form, Button} from 'react-bootstrap';

class SubmitForm extends React.Component {
    state = { input: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.input === '') return;
        this.props.onFormSubmit(this.state.input);
        this.setState({ input: '' });
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({input: e.target.value})
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control id="task" className="form-text" name="task" type="text" placeholder="add a new task here" value={this.state.input} onChange={this.handleChange} />
                </Form.Group>
                <Button className="inline-block form-text" variant="dark" type="submit">add</Button>
            </Form>
        )
    }
}

export default SubmitForm;