import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import NextButton from '../../Components/NexButton';
import BackButton from '../../Components/BackButton';

const ChooseAddons = ({ navigation }) => {
    const [needLabor, setNeedLabor] = useState(null);

    const handleSelectLabor = (value) => {
        setNeedLabor(value);
    };
    const [needpackaging, setNeedpackaging] = useState(null);

    const handleSelectpackaging = (value) => {
        setNeedpackaging(value);
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }} >
            <Text style={{ fontSize: 24, fontWeight: "bold", margin: 30 }}>Choose Add-ons</Text>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 90, height: 74, marginBottom: 20 }} source={require('../../assets/images/Addons1.png')} />
                <View style={styles.box}>
                    <Text style={{ fontSize: 17, fontWeight: '600', marginBottom: 10 }}>Do you need Labor ?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => handleSelectLabor(true)} style={[styles.buttons, needLabor === true && styles.selectedButton]}>
                            <Text style={[styles.buttonsText, needLabor === true && styles.selectedButtonText]}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSelectLabor(false)} style={[styles.buttons, needLabor === false && styles.selectedButton]}>
                            <Text style={[styles.buttonsText, needLabor === false && styles.selectedButtonText]}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 90, height: 90, marginBottom: 20, marginTop: 20 }} source={require('../../assets/images/Addons2.png')} />
                <View style={styles.box}>
                    <Text style={{ fontSize: 17, fontWeight: '600', marginBottom: 10 }}>Do you need Packing ?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => handleSelectpackaging(true)} style={[styles.buttons, needpackaging === true && styles.selectedButton]}>
                            <Text style={[styles.buttonsText, needpackaging === true && styles.selectedButtonText]}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSelectpackaging(false)} style={[styles.buttons, needpackaging === false && styles.selectedButton]}>
                            <Text style={[styles.buttonsText, needpackaging === false && styles.selectedButtonText]}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <NextButton onPress={() => navigation.navigate('CreateOrder_review')} />
            <BackButton onPress={() => navigation.navigate('CreateOrder_addons')} />
        </SafeAreaView>
    );
}

export default ChooseAddons;


const styles = StyleSheet.create({
    box: {
        width: 320, height: 140,
        backgroundColor: 'rgba(87, 152, 249, 0.11)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    buttons: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginHorizontal: 5
    },
    selectedButton: {
        backgroundColor: '#415BF6',
    },
    buttonsText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    selectedButtonText: {
        color: '#fff'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 110
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
    buttonText: {
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