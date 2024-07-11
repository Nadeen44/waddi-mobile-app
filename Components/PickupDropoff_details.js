import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

export default function PickupDropoff_details() {
  return (
    <View style={styles.pickupDropoff}>
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          margin: 15,
          alignSelf: "center",
          marginTop: 20,

        }}
      >
        <Image
          source={require("../assets/images/blue_pickup.png")}
          style={{
            marginRight: -10,
            marginLeft: 10,
            resizeMode: "contain",
            width: 20,
            height: 72,
            marginTop: 3,
          }}
        />
        <View
          style={{
            margin: 8,
            alignSelf: "center",
            justifyContent: "center",
            display: "",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#7F7E7E",
                fontSize: 13,
                marginLeft: 10,
                fontWeight: "500",
              }}
            >
              Pick-up from
            </Text>
            <ScrollView style={{ width: 200 }} horizontal>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#263238",
                    fontWeight: "bold",
                    marginLeft: 15,
                  }}
                >
                  29WR+3H5, Mansoura Qism 2, El Mansoura
                </Text>
                <Image
                  source={require("../assets/images/right arrow.png")}
                  style={{
                    marginLeft: 5,
                    resizeMode: "contain",
                    width: 7,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text
            style={{
              color: "#415BF6",
              fontWeight: "600",
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            55.9 km - 1 hour 1 min EST
          </Text>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#7F7E7E",
                fontSize: 13,
                marginLeft: 10,
                fontWeight: "500",
              }}
            >
              Delivery to
            </Text>
            <ScrollView style={{ width: 200 }} horizontal>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#263238",
                    fontWeight: "bold",
                    marginLeft: 15,
                  }}
                >
                  {" "}
                  87WR+34H5, Mansoura Qism 2, El Mansoura
                </Text>

                <Image
                  source={require("../assets/images/right arrow.png")}
                  style={{
                    marginLeft: 5,
                    resizeMode: "contain",
                    width: 7,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pickupDropoff: {
    marginTop: 12,
    height: 109,
    width: 320,
    marginBottom: 5,
    borderRadius: 25,
    position: "absolute",
    top: 180, // Adjust this value based on your layout
    // left: 35, // Adjust this value based on your layout
    // right: 60,
    backgroundColor: "#F8F8F8",
  },
});
