import React, { Component } from 'react';
import Message from './Message.js';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

var {Card, List} = mui;

export default class MessageList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: {}
		};

		this.firebaseRef = new Firebase('https://elichat.firebaseio.com/messages');
		this.firebaseRef.on("child_added", (msg)=> {
			if (this.state.messages[msg.key()]) {
				return;
			}

			let msgVal = msg.val();
			msgVal.key = msg.key();
			this.state.messages[msgVal.key] = msgVal;
			this.setState({messages: this.state.messages});

			// Temporary scroll fix
			window.setTimeout(function() {
				var textBox = document.getElementById("textBox");
				textBox.scrollTop = textBox.scrollHeight;
			}, 100);

		});

		this.firebaseRef.on("child_removed", (msg)=> {
			var key = msg.key();
			delete this.state.messages[key];
			this.setState({messages: this.state.messages});
		});

	}

	render() {
    var messageNodes = _.values(this.state.messages).map((message)=> {
    	return (
    		<Message message={message.message} key={message.key} />
    	);
    });

    return (
    	<Card style={{
    		flexGrow: 2
    	}}>
    		<List
    		id="textBox"
    		style={{
    			minHeight: '400px',
    			maxHeight: '400px',
    			overflowY: 'scroll'
    		}}>
    			{messageNodes}
    		</List>
    	</Card>
    );
	}
}