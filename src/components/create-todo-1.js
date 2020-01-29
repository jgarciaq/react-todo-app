import React from 'react';

export default class ToDosList extends React.Component {
	render() {
	    return (
                <form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="Que tengo que hacer?" ref="createInput" />
				<button>Crear</button>
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();

		this.props.createTask(this.refs.createInput.value);
	        this.refs.createInput.value = '';
	}
}
                    
