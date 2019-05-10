import React from 'react';
import {
  Platform, StyleSheet, View, StatusBar,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AppNavigator from './components/AppNavigator';
import Provirers from './redux/Provirers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: getStatusBarHeight(),
  },
});

const App = () => (
  <Provirers>
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar style={styles.statusBar} />}
      <AppNavigator />
    </View>
  </Provirers>
);
export default App;
