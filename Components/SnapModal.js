import React, { useRef } from "react";
import { Modal, ScrollView, Text, View, StyleSheet, PanResponder, Animated, Dimensions } from "react-native";
import ModalHeader from "./ModalHeader";
import PickupMap from "./PickupMap";
import PickupDetails from "./PickupDetails";
// import PickupArrived from "./DriverScreens/Pickup_arrived";

const { height: screenHeight } = Dimensions.get("window");
const SNAP_TOP = 240;
const SNAP_BOTTOM = screenHeight - 300;

export default function SnapModal({ isVisible, onClose }) {
  const translateY = useRef(new Animated.Value(SNAP_BOTTOM)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newY = Math.min(
          Math.max(SNAP_TOP, translateY._value + gestureState.dy),
          SNAP_BOTTOM
        );
        translateY.setValue(newY);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          Animated.timing(translateY, {
            toValue: SNAP_BOTTOM,
            duration: 300,
            useNativeDriver: true,
          }).start(onClose);
        } else if (gestureState.dy < -50) {
          Animated.timing(translateY, {
            toValue: SNAP_TOP,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Modal visible={isVisible} transparent>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          justifyContent: "flex-end",
          transform: [{ translateY }],
        }}
        {...panResponder.panHandlers}
      >
        <ScrollView
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 20,
          }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <ModalHeader onClose={onClose} />
          <View style={modalStyles.innerContainer}>
            <PickupMap />
            <PickupDetails
              onReject={() => onClose()}
              onPickup={() => {} /* I assume you have your own handler for this */ }
            />
          </View>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
}

const modalStyles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 20,
    flex:1
  },
});
