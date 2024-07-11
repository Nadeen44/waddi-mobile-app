import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Image, ScrollView, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import PickupDropoffDetails from '../../Components/PickupDropoff_details';

const { width, height } = Dimensions.get('window');
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
    // Your implementation for handling reject press
    closeModal();
};

const DriverOnwayModal = ({ isVisible, onClose }) => {
    const [slideAnim] = useState(new Animated.Value(height));

    useEffect(() => {
        if (isVisible) {
            Animated.timing(slideAnim, {
                toValue: height - 908,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: height,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }, [isVisible]);

    return (
        <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
            <View style={styles.modalContent}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <View style={styles.closeIconContainer}>
                        <AntDesign name="close" size={25} color="#454545" />
                    </View>
                </TouchableOpacity>
                <View style={styles.card}>
                    <View style={styles.blueCard}>
                        <View style={styles.blueCardContent}>
                            <View style={styles.blueCardLeft}>
                                <Text style={styles.blueCardTitle}>24 Port Said St. Mansoura</Text>
                                <Text style={styles.blueCardSubtitle}>You've arrived</Text>
                            </View>
                            <View style={styles.blueCardRight}>
                                <Image source={require('../../assets/images/ArrowUP.png')} style={styles.blueCardImage} />
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
                            <Text style={styles.statusText}>PICKUP</Text>
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
                    <View style={styles.pickupDropoff}>
                        <View style={{ flexDirection: 'row', display: 'flex', margin: 15, alignSelf: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/images/blue_pickup.png')} style={{ marginRight: -10, marginLeft: 10, resizeMode: 'contain', width: 20, height: 72, marginTop: 3 }} />
                            <View style={{ margin: 8, alignSelf: 'center', justifyContent: 'center', display: '' }}>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 10, fontWeight: '500', }}>Pick-up from</Text>
                                    <ScrollView style={{ width: 200 }} horizontal>
                                        <TouchableOpacity style={{ flexDirection: 'row', }}>

                                            <Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>29WR+3H5, Mansoura Qism 2, El Mansoura</Text>
                                            <Image source={require('../../assets/images/right arrow.png')} style={{ marginLeft: 5, resizeMode: 'contain', width: 7, height: 20 }} />
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                                <Text style={{ color: '#415BF6', fontWeight: '600', marginLeft: 20, marginTop: 10, marginBottom: 10, }}>55.9 km - 1 hour 1 min EST</Text>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 10, fontWeight: '500' }}>Delivery to</Text>
                                    <ScrollView style={{ width: 200 }} horizontal>
                                        <TouchableOpacity style={{ flexDirection: 'row', }}>
                                            <Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>   87WR+34H5, Mansoura Qism 2, El Mansoura</Text>

                                            <Image source={require('../../assets/images/right arrow.png')} style={{ marginLeft: 5, resizeMode: 'contain', width: 7, height: 20 }} />
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <MapView
              style={styles.map}
              initialRegion={{
                latitude: 31.0419,
                longitude: 31.3785,
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
              }}
            >
              <Marker
                coordinate={{ latitude: 31.044167937362126, longitude: 31.37658751271655 }}
                title="Dropoff Location"
                description="This is the dropoff point"
              >
                <Image
                  source={require('../../assets/images/dropoff_icon.png')}
                  style={{ width: 30, height: 30 }} // Adjust width and height as needed
                />
              </Marker>
              <Marker
                coordinate={{ latitude: 31.04414504256145, longitude: 31.380412246264466 }}
                title="Pickup Location"
                description="This is the pickup point"
              >
                <Image
                  source={require('../../assets/images/dropoffDown.png')}
                  style={{ width: 45, height: 45 }} // Adjust width and height as needed
                />
              </Marker>
            </MapView>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <View style={styles.closeIconContainer}>
                        <AntDesign name="close" size={25} color="#454545" />
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        position: 'absolute',
        bottom: -100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        height: 908,
        width: 390,
        // padding: 20,
        borderRadius: 10,
        // alignItems: 'center',
        // justifyContent: 'center',


    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 135,
        left: 22,
        zIndex: 2,
    },
    closeIconContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        padding: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 10,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#F8F8F8',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 15,
        height: 315,
        width: 389,
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
        width: 40,
        height: 40,
    },
    leftContent: {
        marginTop: 15,
        // marginBottom:20,
        // flex: 1,
    },
    colorCode: {
        color: '#415BF6', // or any other color you prefer
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
        backgroundColor: '#E1E4F4',
        padding: 4,
        borderRadius: 20,
        marginTop: 12,
        // marginRight: 0,
    },
    contactDetails: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 15,
        marginLeft: 12,
    },
    image: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    statusText: {
        fontSize: 15,
        color: '#415BF6',
        fontWeight: '500',
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
    pickupDropoff: {
        marginTop: 12,
        backgroundColor: '#F6F8FF',
        height: 109,
        width: 320,
        marginBottom: 5,
        borderRadius: 25,
        position: 'absolute',
        bottom: 60, // Adjust this value based on your layout
        left: 35, // Adjust this value based on your layout
        // right: 60,
    },

});

export default DriverOnwayModal;
