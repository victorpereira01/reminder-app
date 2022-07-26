import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F96D00",
    borderBottomWidth: 2,
    borderColor: "#dde3f0",
    paddingTop: 44,

    flexDirection: "row",
    justifyContent: 'center'
  },
  title: {
    fontFamily: "Lato_700Bold",
    fontSize: 20,
    color: "#FFFFFF",
    letterSpacing: 2,
    alignSelf: "center",
    paddingTop: 4
  },
});
