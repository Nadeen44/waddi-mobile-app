import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TABS = ["All", "Confirmed", "Assigned", "On Delivery"];

const TaskSection = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState("All");

    const handlePress = (tab) => {
        setSelectedTab(tab);
        if(tab === "All") {
            navigation.navigate("DriverTask");
        }
    };

    const renderTabs = () => {
        return TABS.map((tab) => (
            <TouchableOpacity
                key={tab}
                style={[styles.tab, selectedTab === tab && styles.tabSelected, tab === "All" && styles.allTabStyle, tab === "Confirmed" && styles.confirmedTabStyle, tab === "Assigned" && styles.assignedTabStyle, tab === "On Delivery" && styles.onDeliveryTabStyle]}
                onPress={() => handlePress(tab)}
            >
                <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>My Tasks</Text>
                </View>
                <View style={styles.tabsContainer}>{renderTabs()}</View>
                <View style={styles.card}>
                    <Text style={styles.noTasksText}>No Tasks Available</Text>
                    <Text style={styles.subText}>You have no upcoming shipments or orders</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 390,
        backgroundColor: "#F4F1F1",
        height: 500,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop:20,
    },
    header: {
        marginBottom: 15,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
   
    },
    tab: {
        // flex: 1,
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#F8F8F8",
        marginLeft:7,
       
    },
    tabSelected: {
        borderColor: "blue",
        borderWidth: 1,
    },
    tabText: {
        fontSize: 14,
        color: "#7E7E7E",
        // paddingVertical: 7,
        // paddingHorizontal: 2,
    },
    selectedTabText: {
        color: "blue",
    },
    // Adjust padding for each tab separately
    allTabStyle: {
        paddingVertical: 8,
        paddingHorizontal: 15,
       

    },
    confirmedTabStyle: {
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    assignedTabStyle: {
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    onDeliveryTabStyle: {
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    selectedTabText: {
        color: "blue",
    },
    card: {
        borderWidth: 1,
        borderColor: "#666666",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        width:320,
        height:280,
        backgroundColor: "#fff",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    noTasksText: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: "#7F7E7E",
        textAlign:'center',
        fontWeight: "400",
     
    },
});

export default TaskSection;
