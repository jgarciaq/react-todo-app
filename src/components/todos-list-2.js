import _ from from 'lodash';
import React from 'react';
import ToDosListHeader from './todos-list-header';

export default class ToDosList extends React.Component {
	render() {
	    return (
		<table>
		    <ToDosListHeader />
		</table>
	    );
	}
}
