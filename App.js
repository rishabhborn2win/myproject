import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "Rishabh", key: '1'},
    {name: "Digvijay", key: "2"},
    {name: "Arnav", key:"3"},
    {name: "Ekagra", key:"4"},
    {name: "Rishabh", key: '5'},
    {name: "Digvijay", key: "6"},
    {name: "Arnav", key:"7"},
    {name: "Ekagra", key:"8"}
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((x) => {
        return (
          <View key={x.key}>
            <Text style={styles.item}>{x.name}</Text>
          </View>
        )
      })}
      </ScrollView>
      
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
    fontSize: 24
  }
  
});
