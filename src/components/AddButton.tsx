import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CreateModal from "./CreateModal";

export default function AddButton() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CreateModal />
      </Modal>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <MaterialIcons
            name="add"
            size={40}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </>
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
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
});
