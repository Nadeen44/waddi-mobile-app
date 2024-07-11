import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

const ShipmentDetails = () => {
  return (
    <View>
      <Image src={"../assets/images/Trucking.png"} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({

    img:{
        width:29,
        height:300
    }
});

export default ShipmentDetails;
