import { StatusBar, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, View, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import Button from '../../Components/Button';
import ProgressBar from '../../Components/ProgressBar';

const PhoneNumber = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const scrollViewRef = useRef(null);

    // Scroll to top function
    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    return (
        <SafeAreaView style={styles.area}>
            <ProgressBar progress={15} startPoint={0} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); scrollToTop(); }}>
                    <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <StatusBar hidden />
                            <View style={styles.container}>
                                <Image style={styles.Image} source={require('../../assets/images/Group 32.png')} />
                                <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 23, width: 290, paddingTop: 30, marginBottom: 20 }}>
                                    Enter your mobile number to verify your account
                                </Text>
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inputContainer}>
                                    <TouchableOpacity>
                                        <View style={{
                                            borderColor: "#ECECEC", width: 40, height: 40,
                                            borderWidth: 0.5, justifyContent: "center", borderRadius: 8, alignItems: "center"
                                        }}>
                                            <Image style={{
                                                width: 20, height: 20,
                                            }} source={require('../../assets/images/egyptianFlag.png')} />
                                        </View>
                                    </TouchableOpacity>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='(+20) 10 123 123 123'
                                        placeholderTextColor={"#CCD1D1"}
                                        selectionColor={'#000'}
                                        keyboardType="numeric"
                                        value={phoneNumber}
                                        onChangeText={setPhoneNumber}
                                    />
                                </View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { navigation.navigate("OTPVerification") }}
                                >
                                    <Text style={{color:'#fff', fontWeight:'500'}} >Agree & Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 320,
        height: 160,
        backgroundColor: "#ffffff",
        shadowColor: '#808B96',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginTop: 40,
        alignSelf: 'center',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 12,
        justifyContent: 'space-between',
        padding: 20,
    },
    inputContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    area: {
        backgroundColor: '#ffffff',
        flex: 1,
        paddingTop: 20
    },
    input: {
        borderColor: "#ECECEC",
        borderWidth: 0.5,
        flex: 1,
        height: 40,
        padding: 10,
        borderRadius: 15,
        marginLeft: 15
    },
    Image: {
        height: 250,
        width: 250,
    },
    button:{
        alignSelf:'center',
        backgroundColor:'#415BF6',
        paddingVertical:10,
        borderRadius:20,
        paddingHorizontal:50,
    },
});

export default PhoneNumber;
