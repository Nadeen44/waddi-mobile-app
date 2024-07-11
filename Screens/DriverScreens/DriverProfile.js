import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import TaskSection from "../../Components/NoTaskSection";
import DriverNavbar from "../../Components/DriverNavbar";


const handleDropdownPress = () => {
    console.log('Dropdown menu pressed');
};

const DriverProfile = () => {
    return (
        <View style={styles.navBar}>
            <View style={styles.firstsection}>
            <DriverNavbar/>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TaskSection />
      </ScrollView>
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
    },

    scrollViewContent:{
       
    }
});

export default DriverProfile;
