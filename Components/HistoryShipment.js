import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TaskSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.headerText}>History Shipment</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={require("../assets/images/shipment box.png")}
          />

          <Text style={styles.subText}>No previous Shipments</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 390,
    backgroundColor: "#F4F1F1",
    height: 450,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 20,
  },
  header: {
    marginBottom: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#E9F0FA",
    borderRadius: 10,
    // : 10,
    marginTop: 20,
    width: 306,
    height: 178,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  noTasksText: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#7F7E7E",
    opacity: 0.7,
    textAlign: "center",
    fontWeight: "400",
    marginTop: 10,
  },
  img: {
    width: 83,
    height: 83,
    marginTop: -20,
  },
});

export default TaskSection;
