import React from 'react';

export default class ToDosListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		};
	}

	renderActionsSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<button>Guardar</button>
                	<button onClick={this.onCancelClick.bind(this)}>Cancelar</button>
                </td>
			);

		}

		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Editar</button>
            	<button>Borrar</button>
            </td>
		);
	}

	render() {
		return (
			<tr>
				<td>{this.props.task}</td>
					{this.renderActionsSection()}
			</tr>
		);
	}

	onEditClick() {
		this.setState({ isEditing: true });
	}

	onCancelClick() {
		this.setState({ isEditing: false });
	}
}
