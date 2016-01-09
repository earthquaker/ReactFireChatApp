import React, { Component } from 'react';
import Channel from './Channel.js';
import mui from 'material-ui';

var {Card, List} = mui;

export default class ChannelList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: [
				'Channel 1',
				'Channel 2'
			]
		};
	}

	render() {
        var channelNodes = this.state.channels.map((channel)=> {
        	return (
        		<Channel channel={channel} />
        	);
        });

        return (
        	<Card style={{
            flexGrow: 1
          }}>
        		<List>
        			{channelNodes}
        		</List>
        	</Card>
        );
	}
}