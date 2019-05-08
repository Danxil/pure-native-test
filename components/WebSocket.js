import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
} from 'react-native';
import { compose } from 'recompose';

import ws from '../sockets/socket';

import withSockets from '../redux/containers/withSockets';

type Props = {
  sendMsg: () => void,
  receiveMsg: () => void
}

// component for testing websockets
class MyWebSocket extends Component<Props> {
  state = {
    inputText: '',
  };

  componentDidMount(): void {
    ws.onopen = (e) => {
      // eslint-disable-next-line no-console
      console.log('ws opened', e);
    };

    ws.onerror = (e) => {
      // eslint-disable-next-line no-console
      console.log('ws error obj', e);
    };

    ws.onclose = (e) => {
      // eslint-disable-next-line no-console
      console.log('ws close obj', e);
    };

    ws.onmessage = (e) => {
      const { receiveMsg } = this.props;
      receiveMsg(e.data);
    };
  }

  componentWillUnmount(): void {
  }

  render() {
    const { inputText } = this.state;
    const { sendMsg, ws } = this.props;
    return (
      <View>
        {ws.map((msg, index) => (
          <View key={msg.type + index}>
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
          onPress={() => {
            sendMsg(inputText);
            this.setState({
              inputText: '',
            });
          }}
          title="send"
        />
      </View>
    );
  }
}

export default compose(withSockets())(MyWebSocket);
