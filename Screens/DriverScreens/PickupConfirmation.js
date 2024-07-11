import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import ModalHeader from "../../Components/ModalHeader";
import PickupMap from "../../Components/PickupMap";
import PickupDetails from "../../Components/PickupDetails";
import PickupArrived from "../DriverScreens/Pickup_arrived";

const PickupConfirmation = ({ modalVisible, closeModal }) => {
  const [pickupArrivedVisible, setPickupArrivedVisible] = useState(false);
  const slideFromRight = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(slideFromRight, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideFromRight, {
        toValue: 500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);

  const handlePickupPress = () => {
    setPickupArrivedVisible(true);
  };

  const handleRejectPress = () => {
    closeModal();
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeModal}
        style={styles.modalContainer}
      >
        <Animated.View
          style={[
            styles.modalContent,
            { transform: [{ translateX: slideFromRight }] },
          ]}
        >
          <ModalHeader onClose={closeModal} />
          <View style={styles.innerContainer}>
            <PickupMap />
            <PickupDetails onReject={handleRejectPress} onPickup={handlePickupPress} />
          </View>
        </Animated.View>
        <PickupArrived
          modalVisible={pickupArrivedVisible}
          closeModal={() => {
            setPickupArrivedVisible(false);
            closeModal();
          }}
        />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 380,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 0,
    height: 500,
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default PickupConfirmation;
