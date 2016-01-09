import React, { Component } from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

export default class Message extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem leftAvatar={
				<Avatar src="https://avatars1.githubusercontent.com/u/3446889?v=3&s=460"/>
			}>
				{this.props.message}
			</ListItem>
		);
	}
}