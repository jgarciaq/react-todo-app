import React from 'react';
import CreateTodo from './create-todo';
import ToDosList from './todos-list';

const todos = [
{
	task: 'Hacer Tutorial de React',
	isCompleted: false
},
{
	task: 'Hora de almorzar',
	isCompleted: true
}
];


export default class App extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}
	render() {
		return (
		    <div>
		        <h1>React ToDos App JG--->!!</h1>
                        <CreateTodo createTask={this.createTask.bind(this)} />
				<ToDosList 
				    todos={this.state.todos}
                                    toogleTask={this.toogleTask.bind(this)}
				/>
			</div>
		);
	}

        toogleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos });
	}        

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos });
	}
}
