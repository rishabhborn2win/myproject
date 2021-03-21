import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("Rishabh");
  const [person, setPerson] = useState({name: 'Arnav', age: 40})

  const clickHandler = () =>{
    setName("Digvijay")
    setPerson({name: "Sunny", age: 20})
  }

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title="Update Name" onPress={clickHandler}/>
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
  buttonContainer: {
    marginTop: 20
  }
});
