import { StyleSheet, Text, View, Image, ScrollView, Button, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import NextButton from '../../Components/NexButton';
import BackButton from '../../Components/BackButton';
import DeliveryCard from '../../Components/DeliveryInfoCard';
import Ionicons from '@expo/vector-icons/Ionicons';

const ReviewOrder = ({ navigation }) => {
    const [chosenTime, setChosenTime] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [showPickupDate, setShowPickupDate] = useState(true);
    const [pickedImage, setPickedImage] = useState(null);

    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || chosenTime;
        setShowPicker(Platform.OS === 'ios');
        setChosenTime(currentTime);
    };

    const toggleTimePicker = () => {
        setShowPickupDate(false);
        setShowPicker(true);
    };
    const handleProfilePress = () => {
        navigation.navigate('UserProfile');
    };

    const handleButtonPress = () => {
        // Logic to handle button press
        navigation.navigate("Order");
    };

    const handleDropdownPress = () => {
        console.log('Dropdown menu pressed');
    };

    const pickImageHandler = async () => {
        // Request permission to access the user's photo library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        // Launch the image picker
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // Check if the user picked an image
        if (!result.cancelled) {
            // Set the picked image URI to state
            setPickedImage(result.uri);
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
            <ScrollView>
                <View>

                    <View style={styles.navbar}>
                        <TouchableOpacity onPress={handleProfilePress} style={styles.iconContainer}>
                            <Image
                                source={require('../../assets/images/profile.jpg')}
                                style={styles.userImage}
                            />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Hello</Text>
                            <Text style={styles.title}>Ahmed Fawzy,</Text>
                        </View>
                        <TouchableOpacity onPress={handleDropdownPress} style={styles.iconContainer}>
                            <Feather name="menu" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: 31.0419,
                            longitude: 31.3785,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <View style={{ backgroundColor: '#415BF6', width: 343, height: 143, display: 'flex', justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'row', borderRadius: 35, margin: -90, paddingHorizontal: 15, }}>
                        <View style={{ margin: 15 }}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>
                                24 Port Said St. Mansoura
                            </Text>
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>
                                13 km · You're 30m away
                            </Text>
                        </View>
                        {/* <Image source={require('../../assets/images/ArrowUP.png')} style={{ height: 37, width: 37, marginTop: 15 }} /> */}
                    </View>
                    <View style={styles.pickup_delivery}>
                        <View style={{ flexDirection: 'row', display: 'flex', margin: 15, alignSelf: 'center' }}>
                            {/* <Image source={require('../../assets/images/Frame 57.png')} style={{ height: 60, width: 18, marginTop: 5 }} /> */}
                            <View style={{ margin: 8, alignSelf: 'center', justifyContent: 'center', display: '' }}>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>


                                    <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 5, fontWeight: '500' }}>Pick-up from</Text>
                                    <ScrollView style={{ width: 100 }} horizontal><Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>29WR+3H5,Mansoura Qism 2,El Mansoura</Text>
                                        <TouchableOpacity>
                                        <Image source={require('../../assets/images/right arrow.png')} style={{  marginLeft: 5, resizeMode:'contain' }} />
                                        </TouchableOpacity>
                                        

                                    </ScrollView>

                                </View>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 5, fontWeight: '500' }}>Delivery to</Text>
                                    <ScrollView style={{ width: 190 }} horizontal><Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>87WR+34H5,Mansoura Qism 2,El Mansoura</Text>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/images/right arrow.png')} style={{  marginLeft: 5, resizeMode:'contain' }} />
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <NextButton onPress={() => navigation.navigate('AddressDetails')} />
            <BackButton onPress={() => navigation.navigate('Order')} />
        </KeyboardAvoidingView>

    )
}

export default ReviewOrder;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        flex: 1
    },
    navbar: {
        backgroundColor: '#415BF6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 108,
        // paddingTop:15,
        // borderBottomColor: '#e0e0e0',
    },
    titleContainer: {
        marginTop: 30,
        flex: 1,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
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
    selected: {
        flexDirection: 'column',
        display: 'flex',
        marginLeft: 10,
        alignSelf: 'center',
        gap: 20,
        marginTop: 3,
    },
    selecteditem: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        borderColor: '#415BF6',
        borderWidth: 2,
        borderRadius: 20,
        width: 267,
        height: 40,
        backgroundColor: '#F8F9FB'
    },
    pickup_delivery: {
        backgroundColor: '#fff',
        width: 319,
        height: 121,
        alignSelf: 'center',
        borderRadius: 23,
        marginTop: 20,
    },
    map: {
        // marginTop: -10,
        width: 390,
        height: 462,
        borderRadius: 35,
        marginBottom: 15,
    },
    timePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1.5,
        borderColor: "#415BF6",
        borderRadius: 23,
        width: 160,
        height: 40,
        fontSize: 12
    },
    infoItem: {
        alignItems: 'center',
        borderColor: "#415BF6",
        justifyContent: 'center'
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    infoText: {
        fontSize: 17,
        borderWidth: 2,
        width: 324,
        borderColor: '#415BF6',
        borderRadius: 20,
        marginTop: 10,
        padding: 10,
        height: 40,
        alignSelf: 'center'


    },
    noteInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#415BF6',
        borderRadius: 23,
        color: '#000',
        width: 160,
        height: 40,
    },
    pickImageButton: {
        borderColor: '#415BF6',
        borderWidth: 1.5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,
        height: 40,
        marginTop: 20,
        borderRadius: 23.5,
        display: 'flex',
        flexDirection: 'row'
    },
    buttonText: {
        color: '#000',
        fontWeight: '600',
        alignSelf: 'center'
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
        marginBottom: 40
    },
    button: {
        width: 85,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#EFEFEF',
        borderRadius: 25,
        flexDirection: 'row',
        display: 'flex'
    },
    buttonTextfooter: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnimg: {
        width: 24,
        height: 15,
        marginLeft: 5,
        marginTop: 2
    }
});