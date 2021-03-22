import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Header from './components/header'
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [todos, setTodos] = useState([
      {text: "Buy A Coffee", key:"1"},
      {text: "Create an app", key: "2"}
    ])
  
  return (
    <View style={styles.container}>
      {/* header */}
        <Header />
    <View style={styles.content}>
      {/* to form */}

      <View style={styles.list}>
        {/* Flatlist */}
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Text>{item.text}</Text>
          )}
        />
      </View>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
