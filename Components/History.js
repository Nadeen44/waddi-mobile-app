import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const ShipmentEvent = ({ event, timestamp }) => (
  <View>
    <Text style={styles.eventText}>{event}</Text>
    <Text style={styles.timestampText}>{timestamp}</Text>
  </View>
);

const ShipmentHistory = () => {
  const events = [
    { event: "Shipment received at Hayy Gamaa", timestamp: "06/01/2022 - 20.00 PM" },
    { event: "Shipment picked from Talkha", timestamp: "06/01/2022 - 22.00 PM" },
    { event: "Delivered", timestamp: "06/01/2022 - 23.00 PM" }
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>History Shipment</Text>
      </View>
      <View style={styles.historyContainer}>
        <Image resizeMode="contain" source={{ uri: "image_source_here" }} style={styles.historyImage} />
        <View style={styles.eventList}>
          {events.map((item, index) => (
            <ShipmentEvent key={index} event={item.event} timestamp={item.timestamp} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    maxWidth: 318,
    flexDirection: "column",
    alignItems: "stretch",
    padding: 20
  },
  headerContainer: {
    textAlign: "center",
    width: "100%"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  historyContainer: {
    justifyContent: "center",
    alignItems: "stretch",
    display: "flex",
    marginTop: 17,
    gap: 10
  },
  historyImage: {
    alignSelf: "center",
    width: 35,
    height: 35
  },
  eventList: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingVertical: 1
  },
  eventText: {
    textAlign: "center",
    // fontFamily: "SF Pro, sans-serif",
    marginTop: 36
  },
  timestampText: {
    color: "#7E7E7E",
    textAlign: "center",
    marginTop: 7,
    fontSize: 12
  }
});

export default ShipmentHistory;