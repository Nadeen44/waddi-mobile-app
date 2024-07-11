import React from "react";
import { View, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const PickupMap = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 31.0419,
        longitude: 31.3785,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      }}
    >
      <Marker
        coordinate={{ latitude: 31.04412, longitude: 31.38057 }}
        title="Dropoff Location"
        description="This is the pickup point"
      >
        <Image
          source={require("../assets/images/blueLocation.png")}
          style={{ width: 30, height: 50 }}
        />
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default PickupMap;
