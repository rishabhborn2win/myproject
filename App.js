import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("Rishabh Mishra");
  const [age, setAge] = useState(20);

  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput 
        multiline
        style={styles.input} 
        placeholder='Ex: Rishabh Mishra'
        onChangeText={(value) => setName(value)}/>

      <Text>Enter Age: </Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='Ex: 20'
        onChangeText={(value) => setAge(value)}/>

      <Text>My Name is {name} and age is {age}</Text>
      
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
