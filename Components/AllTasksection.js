import React, { useState, useEffect  } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import PickupLoad from '../Screens/DriverScreens/PickupLoad'
import Timer from '../Components/Timer';

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
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };


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
                            <View key={task.id} style={styles.task}>
                                <View style={styles.taskDetails}>
                                    <View style={styles.leftDetails}>
                                        <Text style={styles.title}>{task.title}</Text>
                                        <Text style={styles.subtitle}>
                                            <Text style={styles.blackText}>Happy Farm Inc</Text> -
                                            <Text style={styles.orangeText}> #{task.status}</Text>
                                        </Text>
                                        <Text style={styles.Tomorrowtext}>
                                            <Text style={styles.orangeText}>Tomorrow </Text> -
                                            <Text style={styles.blackText}> Container, 32.4 Ibs</Text>
                                        </Text>
                                    </View>
                                    <View style={styles.rightDetails}>
                                        <Text style={styles.statusText}>ASSIGNED</Text>
                                    </View>
                                </View>
                                <View style={styles.pickupDropoff}>
                                    <View style={{ flexDirection: 'row', display: 'flex', margin: 15, alignSelf: 'center', marginTop: 20 }}>
                                        <Image source={require('../assets/images/pickup-dropoff.png')} style={{ marginRight: -10, marginLeft: 17, resizeMode: 'contain', width: 19, height: 75 , marginTop: 0}} />
                                        <View style={{ margin: 8, alignSelf: 'center', justifyContent: 'center', display: '', marginTop:9 }}>
                                            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                                <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 10, fontWeight: '500' }}>Pick-up from</Text>
                                                <ScrollView style={{ width: 200, }} horizontal>
                                                    <Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 10, }}>29WR+3H5, Mansoura Qism 2, El Mansoura</Text>
                                                    <TouchableOpacity>
                                                        <Image source={require('../assets/images/Arrow 4 (2).png')} style={{ marginLeft: 5, resizeMode: 'contain', width: 8, height: 20 }} />
                                                    </TouchableOpacity>
                                                </ScrollView>
                                            </View>
                                            <Text style={[{ color: '#EFB26A', fontWeight: '600', marginLeft: 20, marginTop: 10, }]}>55.9 km - 1 hour 1 min EST</Text>

                                            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginTop: 10 , marginBottom:4}}>
                                                <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 10, fontWeight: '500' }}>Delivery to</Text>
                                                <ScrollView style={{ width: 200 }} horizontal>
                                                    <Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>  87WR+34H5, Mansoura Qism 2, El Mansoura</Text>
                                                    <TouchableOpacity>
                                                        <Image source={require('../assets/images/Arrow 4 (2).png')} style={{ marginLeft: 5, resizeMode: 'contain', width: 8, height: 20 }} />
                                                    </TouchableOpacity>
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.startButton} onPress={openModal}>
                                    <Text style={styles.startButtonText}>Start</Text>
                                </TouchableOpacity>
                                <Timer/>
                                
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>

            <PickupLoad modalVisible={modalVisible} closeModal={closeModal}/>
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
        marginTop: 20,
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
        height: 300,
        alignSelf: 'center',
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
        marginTop: 12,
        backgroundColor: '#F6F8FF',
        height: 109,
        width: 320,
        marginBottom: 5,
        borderRadius: 25,
    },
    blackText: {},
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
