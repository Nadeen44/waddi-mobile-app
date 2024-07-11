import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import OurServices from "../../Components/OurServices";
import HistoryShipment from "../../Components/HistoryShipment";
import AllShipments from "../../Components/AllShipments";

export default function NavigationBar({ navigation }) {
  const pagerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAllShipments, setShowAllShipments] = useState(false);
  const [ShowHistory, setShowHistory] = useState(true);

  const handleSeeAllPress = () => {
    setShowAllShipments(true);
  };

  const handleProfilePress = () => {
    navigation.navigate("UserProfile");
  };

  const handleButtonPress = () => {
    // Logic to handle button press
    navigation.navigate("Order");
  };

  const handleDropdownPress = () => {
    setShowHistory(!showHistory); // Toggle the visibility of shipment history
    setShowAllShipments(!showAllShipments); // Toggle the visibility of all shipments
  };

  const handleScroll = () => {
    if (pagerRef.current) {
      const nextPage = pagerRef.current?.getCurrentPage() + 1;
      if (nextPage < images.length) {
        pagerRef.current?.setPage(nextPage);
        setSelectedIndex(nextPage);
      } else {
        pagerRef.current?.setPage(0);
        setSelectedIndex(0);
      }
    }
  };

  const renderImageItem = (source) => (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.sliderImage} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Create order now</Text>
      </TouchableOpacity>
    </View>
  );

  const images = [
    require("../../assets/images/Services (2).png"),
    require("../../assets/images/Services 2.png"),
    require("../../assets/images/Services 3.png"),
  ];

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleProfilePress}
          style={styles.iconContainer}
        >
          <Image
            source={require("../../assets/images/profile.jpg")}
            style={styles.userImage}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.title}>Ahmed Fawzy,</Text>
        </View>
        <TouchableOpacity
          onPress={handleDropdownPress}
          style={styles.iconContainer}
        >
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <PagerView
          style={styles.carousel}
          initialPage={0}
          ref={pagerRef}
          onPageSelected={({ nativeEvent }) =>
            setSelectedIndex(nativeEvent.position)
          }
        >
          {images.map((image, index) => (
            <View key={index}>{renderImageItem(image)}</View>
          ))}
        </PagerView>
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === selectedIndex ? styles.selectedDot : null,
              ]}
            />
          ))}
        </View>

        <OurServices onDropdownPress={handleDropdownPress} />
        <HistoryShipment />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#415BF6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 108,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  titleContainer: {
    marginTop: 30,
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
  },
  iconContainer: {
    marginTop: 30,
    padding: 8,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sliderImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  carousel: {
    marginHorizontal: 10,
    marginTop: 15,
    height: 200,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignSelf: "flex-end",
    backgroundColor: "#415BF6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  dotsContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  selectedDot: {
    width: 15,
    backgroundColor: "#415BF6",
  },
});
