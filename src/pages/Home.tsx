import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddButton from "../components/AddButton";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import weekdays from "../utils/weekdays";

interface Reminder {
  name: string;
  time: string;
}

export default function Home() {
  const currentDay = new Date();

  return (
    <View style={styles.screen}>
      <Header title="REMINDER" />

      <View style={styles.dayContainer}>
        <Text style={styles.day}>{weekdays[currentDay.getDay() - 1]}</Text>
        <Text style={styles.day}>
          {currentDay
            .getDate()
            .toString()
            .concat("/".concat((currentDay.getMonth() + 1).toString()))}
        </Text>
      </View>

      <View>
        <ListItem time="09:00" title="Vitamina D" />
        <ListItem time="09:00" title="Vitamina D" />
      </View>

      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 32,
  },
  day: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    color: "#393E46",
  }
});
