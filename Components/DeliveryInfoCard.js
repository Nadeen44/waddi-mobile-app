import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from react-native-vector-icons

const AddressBlock = ({ address, style, onPress, icon, subtitle }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <View style={styles.addressTextContainer}>
      <Text style={styles.addressText}>{address}</Text>
     

    </View>
    {/* {icon && <FontAwesome name={icon} size={24} color="black" />}  */}
    <Image source={require('../assets/images/Arrow 4 (1).png')} style={styles.icon} />
  </TouchableOpacity>
);

const DeliveryDetails = () => {
  const details = [
    {
      key: 'pickup',
      subtitle: 'Pickup-from',
      address: '29WR+3H5, Mansoura Qism ...',
      icon: 'location-arrow' 
    },
    {
      key: 'delivery',
      subtitle: 'Delivery-to',
      address: '29WR+3H5, Mansoura Qism ...',
      icon: 'map-marker' 
    },
  ];

  return (
    <View style={styles.deliveryDetailsContainer}>
      {details.map(detail => (
        <AddressBlock
          key={detail.key}
          address={detail.address}
          style={styles[detail.key]}
          icon={detail.icon}
          subtitle={detail.subtitle}
          onPress={() => console.log(`Address: ${detail.address}`)} 
        />
      ))}
    </View>
  );
};

const DeliveryCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.addressContainer}>
        <Text style={styles.addressTextMain}>24 Port Said St. Mansoura</Text>
      </View>
      <View style={styles.distanceContainer}>
        <Text style={styles.distanceText}>
          13 km · <Text style={styles.highlight}>You’re </Text> 30m <Text style={styles.highlight}>away</Text>
        </Text>
      </View>
      <DeliveryDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    alignSelf:'center',
    borderRadius: 45,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 80.2,
    backgroundColor: "#415BF6",
    width: 343,
    height:143,
    flexDirection: "column",
    padding: 16,
    marginTop:-80,
  },
  addressContainer: {
    color: "white",
    textAlign: "center",
    marginLeft: 11,
    fontSize: 14,
    fontWeight: "bold",
    flexDirection: "row",
  },
  distanceContainer: {
    color: "#F3F3F3",
    textAlign: "center",
    marginVertical: 5,
    marginLeft: 12,
    fontSize: 12,
  },
  addressTextMain:{
    color: "#FFF",
    marginTop:10,
    fontSize:17,
  },
  deliveryDetailsContainer: {
    borderRadius: 23,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    marginTop: 20,
    alignItems: "stretch",
    gap: 5,
    fontSize: 11,
    padding: 24,
    height:121,
  },
  pickup: {
    display: "flex",
    flexDirection: "row", 
    alignItems: "center", 
    color: "#929292",
    fontWeight: "400",
  },
  delivery: {
    display: "flex",
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 40,
  },
  addressTextContainer: {},
  addressText: {
    // color: "#263238",
    fontWeight: "500",
  },
  distanceText: {
    color: "#F3F3F3",
  },
  highlight: {
    fontWeight: "bold",
    color: "rgba(243,243,243,1)",
  },
  icon:{
    resizeMode:'contain',
    width: 20,
    height: 15,
    position: 'absolute',
    right: 5,
    // top:15,
  }
});

export default DeliveryCard;
