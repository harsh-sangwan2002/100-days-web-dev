import React, { Component } from 'react'

export default class Todo extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [{ name: 'Check mails', id: 1 }, { name: 'Read articles', id: 2 }, { name: 'Complete HW', id: 3 }],
            currTask: ''
        }
    }

    handleChange = (e) => {

        this.setState({
            currTask: e.target.value
        })
    }

    handleSubmit = () => {

        this.setState({
            tasks: [...this.state.tasks, { name: this.state.currTask, id: this.state.tasks.length + 1 }],
            currTask: ''
        })
    }

    removeTask = (taskId) => {

        let newArr = this.state.tasks.filter(task => task.id !== taskId);

        this.setState({
            tasks: [...newArr]
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleChange} />
                <button type='submit' onClick={this.handleSubmit}>Create Task</button>

                <ul>
                    {
                        this.state.tasks.map(task => (
                            <li key={task.id}>
                                <p>{task.name}</p>
                                <button onClick={() => this.removeTask(task.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
