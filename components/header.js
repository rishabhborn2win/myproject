import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> My ToDos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: "coral",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
