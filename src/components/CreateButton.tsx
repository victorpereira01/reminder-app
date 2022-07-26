import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CreateButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="add" size={50} color='black' style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  button: {
    backgroundColor: "#F96D00",
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center'
  }
});