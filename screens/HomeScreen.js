import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import user from '../redux/hooks/selectors/user';
import userActions from '../redux/hooks/actions/userActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = () => {
  const userInfo = user();
  const { getUserInfo } = userActions();
  console.log(userInfo);
  useEffect(
    () => {
      getUserInfo();
    },
    [],
  );
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};
export default React.memo(HomeScreen);
