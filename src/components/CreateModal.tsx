import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import database from "../config/firebase";

interface IModal {
  setVisible: any;
}

export default function CreateModal({ setVisible }: IModal) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const saveReminder = async () => {
    await addDoc(collection(database, "reminders"), {
      time: time,
      title: title,
      done: false,
    });
    setVisible();
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Criar um novo reminder</Text>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          maxLength={30}
          placeholder="Nome"
          clearTextOnFocus={true}
          style={styles.input}
        />
        <TextInput
          value={time}
          onChangeText={(text) => setTime(text)}
          maxLength={30}
          placeholder="Horário"
          clearTextOnFocus={true}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              saveReminder();
            }}
          >
            <Text style={styles.buttonText}>CRIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "50%",
    paddingTop: 60,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: "30%",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  text: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
  },
  input: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    paddingTop: 40,
    width: "80%",
    borderBottomWidth: 2,
    borderBottomColor: "#393E46",
    borderRadius: 4,
    color: "#393E46",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 32,
    borderRadius: 8,
    width: "60%",
  },
  button: {
    padding: 8,
    backgroundColor: "#F96D00",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
  },
});
