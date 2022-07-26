import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { View } from "react-native";

interface ListItemProps {
  time: string;
  title: string;
}

export default function ListItem({ time, title }: ListItemProps) {
  const [isSelected, setSelection] = useState(false);

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
