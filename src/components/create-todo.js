import React from 'react';

export default class ToDosList extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
		error: null
	    };
	}

	renderError() {
	    if (!this.state.error) { return null; }

	    return <div style={{ color: 'red' }}>{this.state.error}</div>;
	}

	render() {
	    return (
                <form onSubmit={this.handleCreate.bind(this)}>
		    <input type="text" placeholder="Que tengo que hacer?" ref="createInput" />
		    <button>Crear</button>
                    {this.renderError()}
		</form>
	    );
	}

	handleCreate(event) {
		event.preventDefault();

                const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);

		if (validateInput) {
			this.setState({ error: validateInput });
			return;
		}

                this.setState({ error: null });
		this.props.createTask(task);
	        this.refs.createInput.value = '';
	}

        validateInput(task) {
	    if (!task) {
		return 'Por favor ingresar una tarea.';  
	    } else if (_.find(this.props.todos, todo => todo.task === task)) {
                return 'La tarea ya existe.';
            } else {
                return null;
            }
	} 
}
                    