import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, Alert, Linking, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView , {Marker} from 'react-native-maps';
import PickupDropoffDetails from '../../Components/PickupDropoff_details';
import ShipmentDetails from '../../Components/ShipmentDetails';

const phoneNumber = '+201091922749';

const handleCallPress = () => {
    Alert.alert('Call', `Do you want to call ${phoneNumber}?`, [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call', onPress: () => Linking.openURL(`tel:${phoneNumber}`) },
    ]);
};

const handleMessagePress = () => {
    Alert.alert('Message', `Do you want to message ${phoneNumber}?`, [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Message', onPress: () => Linking.openURL(`whatsapp://send?phone=${phoneNumber}`) },
    ]);
};

const handleRejectPress = (closeModal) => {
    // Implement reject functionality here
    closeModal();
};

const PickupArrived = ({ modalVisible, closeModal }) => {
    const slideFromRight = new Animated.Value(400);
    const navigation = useNavigation();

    useEffect(() => {
        Animated.timing(slideFromRight, {
            toValue: modalVisible ? 0 : 400,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [modalVisible]);

    

    const handlePickupPress = () => {
        closeModal();
        navigation.navigate('PickupTask');
       
    };


    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <Animated.View style={[styles.modalContainer, { transform: [{ translateX: slideFromRight }] }]}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                        <View style={styles.closeIconContainer}>
                            <AntDesign name="close" size={25} color="#454545" />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.innerContainer}>
                    <MapView
              style={styles.map}
              initialRegion={{
                latitude:  31.037933,
                longitude: 31.3815,
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
              }}
            >
                    <Marker
                coordinate={{latitude:31.04412, longitude: 31.38057 }}
                title="Dropoff Location"
                description="This is the pickup point"
              >
                <Image
                  source={require('../../assets/images/blueLocation.png')}
                  style={{ width: 30, height: 50 }} // Adjust width and height as needed
                />
              </Marker>
            </MapView>

                        <View style={styles.card}>
                            <View style={styles.blueCard}>
                                <View style={styles.blueCardContent}>
                                    <View style={styles.blueCardLeft}>
                                        <Text style={styles.blueCardTitle}>24 Port Said St. Mansoura</Text>
                                        <Text style={styles.blueCardSubtitle}>You've arrived</Text>
                                    </View>
                                    <View style={styles.blueCardRight}>
                                        <Image source={require('../../assets/images/locationIcon.png')} style={styles.blueCardImage} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.leftContent}>
                                <Text style={styles.title}>Solar Panel</Text>
                                <Text style={styles.subtitle}>
                                    Green Energy LTD - <Text style={styles.colorCode}>#DE6574</Text>
                                </Text>
                                <Text style={styles.Today}>
                                    Today <Text style={styles.todaySubtext}>- Container, 32.4 Ibs</Text>
                                </Text>

                            </View>
                            <View style={styles.rightContent}>
                                <View style={styles.rightDetails}>
                                    <Text style={styles.statusText}>ASSIGNED</Text>
                                </View>
                                <View style={styles.contactDetails}>
                                    <TouchableOpacity onPress={handleCallPress}>
                                        <Image source={require('../../assets/images/call.png')} style={styles.image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleMessagePress}>
                                        <Image source={require('../../assets/images/message.png')} style={styles.image} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.infoContainer}>
                                <TouchableOpacity style={styles.notesButton}>
                                    <Image source={require('../../assets/images/notes.png')} style={styles.notesImage} />
                                    <Text style={styles.notesText}>Trip Notes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.infoButton}>
                                    <Image source={require('../../assets/images/info-circle.png')} style={styles.infoImage} />
                                </TouchableOpacity>
                            </View>
                            <PickupDropoffDetails />
    
                            
                            <View style={styles.bottomButtons}>
                                <TouchableOpacity style={styles.rejectButton} onPress={() => handleRejectPress(closeModal)}>
                                    <Text style={styles.RejectText}>Reject</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.pickupButton} onPress={handlePickupPress} >
                                    <Text style={styles.PickupText} >Pickup</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </Animated.View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 0,
        height: 1000,
        width: '100%',
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 380,
    },
    closeButton: {
        position: 'absolute',
        top: 25,
        left: 20,
        zIndex: 2,
    },
    closeIconContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        padding: 10,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 30,
        overflow: 'hidden',
    },
    map: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 250,
        backgroundColor: '#F8F8F8',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 15,
        height: 415,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1,

    },
    cardText: {
        fontSize: 16,
        color: '#333',
    },
    blueCard: {
        alignSelf: 'center',
        backgroundColor: '#415BF6',
        height: 75,
        width: 343,
        position: 'absolute',
        top: -75,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden',
    },
    blueCardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    blueCardLeft: {
        marginTop: 2,
        marginLeft: 7,
    },
    blueCardRight: {},
    blueCardTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFF',
        paddingBottom: 5,
    },
    blueCardSubtitle: {
        fontSize: 14,
        color: '#FFF',
        opacity: 0.7,
    },
    blueCardImage: {
        width: 29,
        height: 46,
    },
    leftContent: {
        marginTop: 15,
        // marginBottom:20,
        // flex: 1,
    },
    colorCode: {
        color: '#EFB26A', // or any other color you prefer
    },
    rightContent: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    rightDetails: {
        alignItems: 'center',
        height: 25,
        width: 79,
        borderRadius: 25,
        backgroundColor: '#FCF2E3',
        padding: 4,
        borderRadius: 20,
        marginTop: 15,
        // marginRight: 0,
    },
    contactDetails: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 23,
        marginLeft: 12,
    },
    image: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    statusText: {
        fontSize: 14,
        color: '#EFB26A',
        fontWeight: '400',
        alignSelf: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },

    Today: {
        fontWeight: '600',
        fontSize: 16,
        color: '#415BF6',
        marginTop: 25,
    }
    ,
    todaySubtext: {
        color: '#666',
        fontWeight: '400',
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 50,
        left: 70,
        right: 70,
    },

    rejectButton: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#7F7E7E',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 153,
        height: 42,
        marginRight: 10, // Add margin to the right of the Reject button
    },

    pickupButton: {
        alignItems: 'center',
        backgroundColor: '#415BF6',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 153,
        height: 42,
        marginLeft: 5, // Add margin to the left of the Pickup button
    },

    RejectText: {
        color: '#F04248',
        fontWeight: '400',
        fontSize: 15,
    },

    PickupText: {
        color: '#FFF',
        fontWeight: '400',
        fontSize: 15,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 150,
        left: 60,
        // right: 90,

    },
    notesButton: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#415BF6',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 238,
        height: 42,
        flexDirection: 'row',
        justifyContent: 'center',


        // right: 30,
        // marginLeft: 30,
        // marginTop:50,
    },
    notesText: {
        color: '#415BF6',
        fontWeight: '500',
        fontSize: 15,
    },
    notesImage: {
        width: 24,
        height: 24,
        marginRight: 6,
    },
    infoButton: {
        backgroundColor: '#FFF',
        width: 42,
        height: 42,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#415BF6',
        marginLeft: 15,
    },
    infoImage: {
        width: 24,
        height: 24,
        alignSelf: 'center',
        marginTop: 8,

    }
});

export default PickupArrived;
