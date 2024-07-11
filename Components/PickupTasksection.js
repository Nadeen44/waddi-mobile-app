import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from "react-native";
import DriverOnwayModal from "../Screens/DriverScreens/DriverOnway";

const TABS = ["All", "Confirmed", "Assigned", "On Delivery"];

const TaskSection = () => {
    const [selectedTab, setSelectedTab] = useState("All");
    const [tasks, setTasks] = useState([
        { id: 1, title: "Fresh Fruits", status: "DE6575" },
        { id: 2, title: "Fresh Fruits", status: "DE6575" },
        { id: 3, title: "Fresh Fruits", status: "DE6575" },
    ]);

    const handlePress = (tab) => {
        setSelectedTab(tab);
    };

    const filteredTasks = selectedTab === "All" ? tasks : tasks.filter(task => task.status === selectedTab);

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

    const [isDriverOnwayModalVisible, setIsDriverOnwayModalVisible] = useState(false);

    const openModal = useCallback(() => {
        setIsDriverOnwayModalVisible(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsDriverOnwayModalVisible(false);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>My Tasks</Text>
                </View>
                <View style={styles.tabsContainer}>{renderTabs()}</View>
                <ScrollView style={styles.scrollview}>
                    {filteredTasks.length === 0 ? (
                        <View style={styles.card}>
                            <Text style={styles.noTasksText}>No Tasks Available</Text>
                            <Text style={styles.subText}>You have no {selectedTab.toLowerCase()} tasks</Text>
                        </View>
                    ) : (
                        filteredTasks.map((task) => (
                            <TouchableOpacity
                                key={task.id}
                                onPress={() => {
                                    if (task.id === 1) {
                                        openModal();
                                    }
                                }}
                            >
                                <View key={task.id} style={[styles.task]}>
                                    <View style={styles.taskDetails}>
                                        <View style={styles.leftDetails}>
                                            <Text style={styles.title}>{task.title}</Text>
                                            <Text style={styles.subtitle}>
                                                <Text style={styles.blackText}>Happy Farm Inc</Text> -
                                                <Text style={[styles.orangeText, task.id === 1 && styles.blueText]}> #{task.status}</Text>
                                            </Text>
                                            <Text style={styles.Tomorrowtext}>
                                                <Text style={[styles.orangeText, task.id === 1 && styles.blueText]}>Tomorrow </Text> -
                                                <Text style={[styles.blackText, task.id === 1 && styles.blackText1]}> Container, 32.4 Ibs</Text>
                                            </Text>
                                        </View>
                                        <View style={[styles.rightDetails, task.id === 1 && styles.specialTask]}>
                                            <Text style={[styles.statusText, task.id === 1 ? styles.specialStatusText : null]}>
                                                {task.id === 1 ? "PICKUP" : "ASSIGNED"}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.pickupDropoff}>
                                        <View style={{ flexDirection: 'row', display: 'flex', margin: 15, alignSelf: 'center', marginTop: 20 }}>
                                            <Image
                                                source={task.id === 1 ? require('../assets/images/blue_pickup.png') : require('../assets/images/pickup-dropoff.png')}
                                                style={{ marginRight: -10, marginLeft: 10, resizeMode: 'contain', width: 20, height: 72, marginTop: 3 }}
                                            />
                                            <View style={{ margin: 8, alignSelf: 'center', justifyContent: 'center', display: '' }}>
                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 10, fontWeight: '500', }}>Pick-up from</Text>
                                                    <ScrollView style={{ width: 200 }} horizontal>
                                                        <TouchableOpacity style={{ flexDirection: 'row', }}>
                                                            <Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>29WR+3H5, Mansoura Qism 2, El Mansoura</Text>
                                                            <Image source={require('../assets/images/right arrow.png')} style={{ marginLeft: 5, resizeMode: 'contain', width: 7, height: 20 }} />
                                                        </TouchableOpacity>
                                                    </ScrollView>
                                                </View>
                                                <Text style={[{ color: '#EFB26A', fontWeight: '600', marginLeft: 20, marginTop: 10, marginBottom: 10, }, task.id === 1 && styles.blueText]}>55.9 km - 1 hour 1 min EST</Text>
                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 10, fontWeight: '500' }}>Delivery to</Text>
                                                    <ScrollView style={{ width: 200 }} horizontal>
                                                        <TouchableOpacity style={{ flexDirection: 'row', }}>
                                                            <Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>   87WR+34H5, Mansoura Qism 2, El Mansoura</Text>
                                                            <Image source={require('../assets/images/right arrow.png')} style={{ marginLeft: 5, resizeMode: 'contain', width: 7, height: 20 }} />
                                                        </TouchableOpacity>
                                                    </ScrollView>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    )}
                </ScrollView>
            </View>

            <DriverOnwayModal isVisible={isDriverOnwayModalVisible} onClose={closeModal} />
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
        // marginTop: 20,
    },
   
    scrollview: {
        height: 400,
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
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#F8F8F8",
        marginLeft: 7,
    },
    tabSelected: {
        borderColor: "blue",
        borderWidth: 1,
    },
    tabText: {
        fontSize: 14,
        color: "#7E7E7E",
    },
    selectedTabText: {
        color: "blue",
    },
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
    task: {
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 25,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        width: 340,
        height: 250,
        alignSelf: 'center',
    },
    specialTask: {
        width: 65,
        height: 30,
        backgroundColor: "#E1E4F4",
    },
    specialStatusText: {
        marginTop: 1,
        color: "#415BF6",
        fontSize: 14,
        fontWeight: '500'
    },
    noTasksText: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: "#333",
        opacity: 0.7,
        textAlign: 'center',
        fontWeight: "400",
    },
    taskDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    leftDetails: {
        flex: 2,
    },
    rightDetails: {
        alignItems: 'center',
        height: 25,
        width: 79,
        borderRadius: 25,
        backgroundColor: '#FCF2E3',
        padding: 5,
        borderRadius: 20,
        marginTop: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 15,
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
    },
    Tomorrowtext: {
        fontSize: 16,
        marginTop: 10,
        color: '#777',
    },
    statusText: {
        fontSize: 14,
        color: '#EFB26A',
        fontWeight: '400',
        alignSelf: 'center',
    },
    pickupDropoff: {
        marginTop: 15,
        backgroundColor: '#F6F8FF',
        height: 109,
        width: 320,
        marginBottom: 5,
        borderRadius: 25,
    },
    blackText: {},
    blueText: {
        color: '#415BF6'
    },
    orangeText: {
        color: '#FFA500',
    },
    startButton: {
        backgroundColor: '#BDBABA',
        paddingVertical: 10,
        borderRadius: 25,
        marginTop: 5,
        alignSelf: 'center',
        width: 143,
        alignItems: 'center',
    },
    startButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },
});

export default TaskSection;
