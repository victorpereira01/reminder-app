import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddButton from "../components/AddButton";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import database from "../config/firebase";
import weekdays from "../utils/weekdays";

interface Reminder {
  time: string;
  title: string;
  done: boolean;
}

export default function Home() {
  const currentDay = new Date();

  const [reminders, setReminders] = useState<any | null>(null);

  useEffect(() => {
    const fetchReminders = async () => {
      const remindersCol = collection(database, "reminders");
      const reminderSnapshot = await getDocs(remindersCol);
      return reminderSnapshot.docs.map((doc) => doc.data());
    };

    fetchReminders().then((doc) => {
      doc.sort((a, b) => (a.time < b.time ? -1 : 1));
      setReminders(doc);
    });
  }, []);

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
        {reminders?.map((rm: Reminder) => {
          return (
            <ListItem
              key={rm.time.concat(rm.title)}
              time={rm.time}
              title={rm.title}
              done={rm.done}
            />
          );
        })}
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
  },
});
