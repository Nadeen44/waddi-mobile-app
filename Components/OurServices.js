// import * as React from "react";
import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import History from  '../Components/History'

function OurServices(onDropdownPress) {

  const handleServiceClick = (serviceName) => {
    console.log(`${serviceName} clicked`);
  };

  const [showHistory, setShowHistory] = useState(false); // State to track the visibility of shipment history

  const handleSeeAll = () => {
    setShowHistory(!showHistory);
    onDropdownPress(); // Toggle the visibility of shipment history
  };

  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text style={styles.textHeader}>Our services</Text>
        <TouchableOpacity style={styles.buttonSeeAll} onPress={()=>handleSeeAll}>
          <Text>See all</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#37474F" /> 
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.serviceContainer} onPress={() => handleServiceClick("WADDI Express")}>
        <Image resizeMode="contain" source={require('../assets/images/Waddi Box (1).png')} style={styles.serviceImage} />
        <View style={styles.serviceTextContainer}>
          <Text style={styles.serviceTitle}>WADDI Express</Text>
          <Text style={{color:'#929292' , width:195}}>Express Division provides packages and documents ipsum sit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceContainer} onPress={() => handleServiceClick("WADDI Logistics Solutions")}>
        <Image resizeMode="contain" source={require('../assets/images/Waddi car icons (5).png')} style={{width:63, height:47}} />
        <View style={styles.serviceTextContainer}>
          <Text style={styles.serviceTitle}>WADDI Logistics Solutions</Text>
          <Text style={{color:'#929292',width:195}}>Express Division provides packages and documents ipsum sit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceContainer} onPress={() => handleServiceClick("WADDI Express")}>
        <Image resizeMode="contain" source={require('../assets/images/Waddi Box (1).png')} style={styles.serviceImage} />
        <View style={styles.serviceTextContainer}>
          <Text style={styles.serviceTitle}>WADDI Express</Text>
          <Text style={{color:'#929292',width:195}}>Express Division provides packages and documents ipsum sit</Text>
        </View>
      </TouchableOpacity>

      {showHistory && (
        <View style={styles.shipmentHistory}>
          {/* Shipment history content goes here */}
          {/* <History/> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    alignItems: "center",
    display: "flex",
    // maxWidth: 362,
    flexDirection: "column",
  },
  view2: {
    alignItems: "stretch",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  textHeader: {
    color: "#263238",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonSeeAll: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageIcon: {
    width: 13,
    height: 13,
    marginLeft: 4,
  },
  serviceContainer: {
    alignItems: "center",
    alignSelf:'center',
    borderRadius: 10.12,
    backgroundColor: "#E9F0FA",
    display: "flex",
    marginTop: 16,
    width:325,
    height:89,
    flexDirection: "row",
    padding: 20,
  },
  serviceImage: {
    width: 54,
    height: 54,
    marginRight: 20,
  },
  serviceTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default OurServices