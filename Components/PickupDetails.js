import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import PickupDropoffDetails from "../Components/PickupDropoff_details";


const phoneNumber = "+201091922749"; // Replace with your actual phone number

const handleCallPress = () => {
  Alert.alert("Call", `Do you want to call ${phoneNumber}?`, [
    {
      text: "Cancel",
      style: "cancel",
    },
    {
      text: "Call",
      onPress: () => {
        Linking.openURL(`tel:${phoneNumber}`);
      },
    },
  ]);
};

const handleMessagePress = () => {
  Alert.alert("Message", `Do you want to message ${phoneNumber}?`, [
    {
      text: "Cancel",
      style: "cancel",
    },
    {
      text: "Message",
      onPress: () => {
        Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
      },
    },
  ]);
};

const PickupDetails = ({ onReject, onPickup }) => {
  return (
    <View style={styles.card}>
      <View style={styles.blueCard}>
        <View style={styles.blueCardContent}>
          <View style={styles.blueCardLeft}>
            <Text style={styles.blueCardTitle}>
              24 Port Said St. Mansoura
            </Text>
            <Text style={styles.blueCardSubtitle}>
              13 km · You’re 30m away
            </Text>
          </View>
          <View style={styles.blueCardRight}>
            <Image
              source={require("../assets/images/locationIcon.png")}
              style={styles.blueCardImage}
            />
          </View>
        </View>
      </View>
      <View style={styles.leftContent}>
        <Text style={styles.title}>Solar Panel</Text>
        <Text style={styles.subtitle}>
          Green Energy LTD -{" "}
          <Text style={styles.colorCode}>#DE6574</Text>
        </Text>
        <Text style={styles.Today}>
          Today{" "}
          <Text style={styles.todaySubtext}>- Container, 32.4 Ibs</Text>
        </Text>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.rightDetails}>
          <Text style={styles.statusText}>ASSIGNED</Text>
        </View>
        <View style={styles.contactDetails}>
          <TouchableOpacity onPress={handleCallPress}>
            <Image
              source={require("../assets/images/call.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMessagePress}>
            <Image
              source={require("../assets/images/message.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.notesButton}>
            <Image
              source={require("../assets/images/notes.png")}
              style={styles.notesImage}
            />
            <Text style={styles.notesText}>Trip Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoButton}>
            <Image
              source={require("../assets/images/info-circle.png")}
              style={styles.infoImage}
            />
          </TouchableOpacity>
        </View>
        <PickupDropoffDetails />
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.rejectButton}
          onPress={onReject}
        >
          <Text style={styles.RejectText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pickupButton}
          onPress={onPickup}
        >
          <Text style={styles.PickupText}>Pickup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    height: 240,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  blueCard: {
    alignSelf: "center",
    backgroundColor: "#415BF6",
    height: 75,
    width: 343,
    position: "absolute",
    top: -75,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
  blueCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  blueCardLeft: {
    marginTop: 2,
    marginLeft: 7,
  },
  blueCardRight: {},
  blueCardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFF",
    paddingBottom: 5,
  },
  blueCardSubtitle: {
    fontSize: 14,
    color: "#FFF",
  },
  blueCardImage: {
    width: 29,
    height: 46,
  },
  leftContent: {
    marginTop: 15,
  },
  colorCode: {
    color: "#EFB26A",
  },
  rightContent: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  rightDetails: {
    alignItems: "center",
    height: 25,
    width: 79,
    borderRadius: 25,
    backgroundColor: "#FCF2E3",
    padding: 4,
    borderRadius: 20,
    marginTop: 13,
    marginRight: 7,
  },
  contactDetails: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 23,
    paddingRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  statusText: {
    fontSize: 14,
    color: "#EFB26A",
    fontWeight: "400",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  Today: {
    fontWeight: "600",
    fontSize: 16,
    color: "#415BF6",
    marginTop: 25,
  },
  todaySubtext: {
    color: "#666",
    fontWeight: "400",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 50,
    left: 70,
    right: 70,
  },
  rejectButton: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#7F7E7E",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 153,
    height: 42,
    marginRight: 10,
  },
  pickupButton: {
    alignItems: "center",
    backgroundColor: "#415BF6",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 153,
    height: 42,
    marginLeft: 5,
  },
  RejectText: {
    color: "#F04248",
    fontWeight: "400",
    fontSize: 15,
  },
  PickupText: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 15,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 200,
  },
  notesButton: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#415BF6",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 238,
    height: 42,
    flexDirection: "row",
    justifyContent: "center",
  },
  notesText: {
    color: "#415BF6",
    fontWeight: "500",
    fontSize: 15,
  },
  notesImage: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  infoButton: {
    backgroundColor: "#FFF",
    width: 42,
    height: 42,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#415BF6",
    marginLeft: 15,
  },
  infoImage: {
    width: 24,
    height: 24,
    alignSelf: "center",
    marginTop: 8,
  },
});

export default PickupDetails;