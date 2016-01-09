import React, { Component } from 'react';
import MessageList from './MessageList.js';
import ChannelList from './ChannelList.js';
import MessageBox from './MessageBox.js';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import MyRawTheme from './Theme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

export default class App extends Component {

  render() {
    return (
      <div>
        <AppBar title="Elias Chat Application" />
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }

}
