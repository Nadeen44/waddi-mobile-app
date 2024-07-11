import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import PickupTasksection from "../../Components/PickupTasksection";


const handleDropdownPress = () => {
    console.log('Dropdown menu pressed');
};

const DriverProfile = () => {
    return (
        <View style={styles.navBar}>
            <View style={styles.firstsection}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Text style={styles.headerText}>Monday</Text>
                    <Text style={styles.headersubtitle}>Dec 30, 2024</Text>
                </View>
                <TouchableOpacity onPress={handleDropdownPress} style={styles.iconContainer}>
                    <Feather name="menu" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <View style={styles.cardcontent}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.image}></Image>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Ahmed Fawzy</Text>
                        <Text style={styles.cardsubtitle}>SF PO 874</Text>
                    </View>
                    <View style={styles.rightDetails}>
                  <Text style={styles.statusText}>ONLINE</Text>
                </View>
                </View>
                <View style={styles.greysection}>
                    <Text style={styles.greysectionTextLeft}>Logged from Jan 4, 4:21 AM</Text>
                    <Text style={styles.greysectionTextRight}>04:21:32</Text>
                </View>
            </View>
            <PickupTasksection />
            </View>
        
        </View>
        
    );
};

const styles = StyleSheet.create({
    navBar: {
        // height: 380,
        flexDirection: "column",
        justifyContent: "center",
        
    },
    firstsection:{
      backgroundColor: "#415BF6",  
      paddingTop:60,
      
    },
    header: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    titleContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    headerText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 7,
    },
    subtitle: {
        color: "#FFF",
        fontSize: 14,
        opacity: 0.7,
    },
    card: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        width: 390,
        height: 158,
        marginTop: 20,
        marginBottom:25,
        borderRadius: 25,
        position: "relative", // Added relative positioning

    },
    cardText: {
        color: "#333",
        fontSize: 16,
        fontWeight: "bold",
    },
    iconContainer: {
        marginBottom: 10,
        marginRight: 15,
    },
    greysection: {
        position: "absolute", // Added absolute positioning
        bottom: 0, // Align to the bottom of the card
        backgroundColor: "#F4F1F1",
        height: 58,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        width: 390,
        alignItems: "center", // Center horizontally
        justifyContent: "space-between", // Space between children vertically
        flexDirection: "row", // Added flex direction for arranging texts horizontally
        paddingHorizontal: 20, // Added horizontal padding for spacing
    },
    greysectionTextLeft: {
        color: "#415BF6",
        fontSize: 14,
        fontWeight: "500",
        marginLeft: 5,
    },
    greysectionTextRight: {
        color: "#415BF6",
        fontSize: 14,
        fontWeight: "500",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    cardcontent: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    headersubtitle: {
        fontSize: 14,
        color: "#fff",
        opacity: 0.7,
    },
    cardsubtitle: {
        fontSize: 14,
        color: "#333",
        opacity: 0.7,
    },
    rightDetails: {
      alignItems: 'center',
      height: 25,
      width: 70,
      borderRadius: 25,
      backgroundColor: '#EBF4EA',
      padding: 4,
      borderRadius: 20,
      marginBottom: 40,
      marginRight: 7,
    },
    statusText: {
      fontSize: 14,
      color: '#7FB077',
      fontWeight: '500',
      alignSelf: 'center',
    },
    scrollViewContent:{
       
    }
});

export default DriverProfile;
