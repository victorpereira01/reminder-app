import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function Home() {
  return (
    <View>
      <Header title="REMINDER" />

    </View>
  );
}

const styles = StyleSheet.create({});
