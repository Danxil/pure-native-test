import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LinksScreen = () => (
  <View style={styles.container}>
    <Text>Links Screen</Text>
  </View>
);
export default LinksScreen;
