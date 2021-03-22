import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "Rishabh", key: '1'},
    {name: "Digvijay", key: "2"},
    {name: "Arnav", key:"3"},
    {name: "Ekagra", key:"4"},
    {name: "Rishabh", key: '5'},
    {name: "Digvijay", key: "6"},
    {name: "Arnav", key:"7"},
    {name: "Ekagra", key:"8"},
    {name: "Kittu", key: "9"}
  ]);

  const pressHandler = (id) => {
    
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != id)
    })
    }

  return (
    <View style={styles.container}>

    <FlatList 
      numColumns={2}
      data={people}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 20
  }
  
});
