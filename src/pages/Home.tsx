import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

export default function Home() {
  return (
    <View>
      <Header title="REMINDER" />

      <View style={styles.dayContainer}>
        <Text style={styles.day}>TER</Text>
        <Text style={styles.day}>26/07</Text>
      </View>

      <View style={styles.listContainer}>
        
        <ListItem time="09:00" title="Vitamina D" />
        <ListItem time="09:00" title="Vitamina D" />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 32,
  },
  day: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    color: "#393E46",
  },
  listContainer: {
  }
});
