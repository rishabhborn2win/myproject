import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsumdolar cimets!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
