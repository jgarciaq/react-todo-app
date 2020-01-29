import React from 'react';
import ToDosListHeader from './todos-list-header';

export default class ToDosList extends React.Component {
	render() {
	    console.log(this.props.todos);

	    return (
		<table>
		    <ToDosListHeader />
		</table>
	    );
	}
}
