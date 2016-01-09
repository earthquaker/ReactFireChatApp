import React, { Component } from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

export default class Channel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem>
				{this.props.channel}
			</ListItem>
		);
	}
}