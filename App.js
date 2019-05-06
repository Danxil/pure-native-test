import React from 'react';
import {
  Platform, StyleSheet, View, StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import configureStore from './redux/configureStore';

import AppNavigator from './components/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: getStatusBarHeight(),
  },
});


const App = () => (
  <Provider store={configureStore()}>
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar style={styles.statusBar} />}
      <AppNavigator />
    </View>
  </Provider>
);
export default App;
