import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
} from 'react-native';
import io from 'socket.io-client';
import { compose } from 'recompose';


import withSockets from '../redux/containers/withSockets';

type Props = {
  sendMsg: () => void,
  receiveMsg: () => void,
  ws: Array<any>
}

// component for testing websockets
class MyWebSocket extends Component<Props> {
  state = {
    inputText: '',
  };

  constructor() {
    super();
    this.socket = io.connect('ws://localhost:3000');
  }

  componentDidMount(): void {
    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('message', (data) => {
      const { receiveMsg } = this.props;
      receiveMsg(data);
    });
  }

  sendMsg = () => {
    const { sendMsg: sendMsgAction } = this.props;
    const { inputText } = this.state;

    this.socket.send(inputText);
    sendMsgAction(inputText);
    this.setState({
      inputText: '',
    });
  };

  genId = () => Math.random().toString(36).substr(2, 9);;

  render() {
    const { inputText } = this.state;
    const { ws: wsReducer } = this.props;
    return (
      <View>
        {wsReducer.map(msg => (
          <View key={this.genId()}>
            <Text>
              {msg.type}
              :
              {msg.message}
            </Text>
          </View>
        ))}
        <TextInput
          value={inputText}
          onChangeText={text => this.setState({ inputText: text })}
        />
        <Button
          onPress={this.sendMsg}
          title="send"
        />
      </View>
    );
  }
}

export default compose(withSockets())(MyWebSocket);
