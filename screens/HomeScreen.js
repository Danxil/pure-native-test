import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { compose, pure } from 'recompose';

import withUser from '../redux/containers/withUser';

// components
import WebSocket from '../components/WebSocket';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  getUserInfo: () => void,
}
const HomeScreen = ({ getUserInfo }: Props) => {
  useEffect(
    () => {
      getUserInfo();
    },
    [],
  );
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <WebSocket />
    </View>
  );
};
export default compose(
  withUser(),
  pure,
)(HomeScreen);
