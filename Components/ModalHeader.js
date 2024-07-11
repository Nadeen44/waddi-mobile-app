import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ModalHeader = ({ onClose }) => {
  return (
    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
      <View style={styles.closeIconContainer}>
        <AntDesign name="close" size={25} color="#454545" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 25,
    left: 20,
    zIndex: 2,
  },
  closeIconContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    padding: 10,
  },
});

export default ModalHeader;
