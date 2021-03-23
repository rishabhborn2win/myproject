import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Header from './components/header'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import ToDoItems from './components/todoitems';
import AddToDo from './components/addtodo';

export default function App() {
    const [todos, setTodos] = useState([
      {text: "Buy A Coffee", key:"1"},
      {text: "Create an app", key: "2"},
      {text: "Play with switch", key:"3"}
    ]);

    const pressHandler = (key) => {
      setTodos((prevToDos) => {
        return prevToDos.filter((todo) => todo.key != key )
      })
    }

    const submitHandler = (text) => {

      if(text.length > 3){
      setTodos((prevToDos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevToDos,

        ]
      })
    }else {
    Alert.alert('OOPS!', 'ToDo must be over 3 Char long', [
      {text: 'UnderStood', onPress: () => console.log('Alert Closed')}
    ])
  }
    }
  return (
    <View style={styles.container}>
        <Header />
    <View style={styles.content}>
      {/* to form */}
      <AddToDo pressHandler={submitHandler} />
      <View style={styles.list}>
        {/* Flatlist */}
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDoItems item={item} pressHandler={pressHandler} />
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
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
