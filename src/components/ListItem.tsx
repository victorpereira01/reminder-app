import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { View } from "react-native";
import database from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore/lite";

interface ListItemProps {
  id: string;
  time: string;
  title: string;
  done: boolean;
}

export default function ListItem({ id, time, title, done }: ListItemProps) {
  const [isSelected, setSelection] = useState(done);

  const updateReminder = async () => {
    const ref = doc(database, "reminders", id);
    await updateDoc(ref, {
      done: !isSelected,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{time}</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <CheckBox
          checked={isSelected}
          onPress={() => {
            updateReminder();
            setSelection(!isSelected);
          }}
          checkedColor="#F96D00"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 16,
    marginLeft: 32,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    paddingRight: 32,
  },
});
