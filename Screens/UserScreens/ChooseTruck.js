import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import NextButton from '../../Components/NexButton';
import BackButton from '../../Components/BackButton';
import CheckIcon from '../../assets/images/tick.png';



const ChooseTruck = ({ navigation }) => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleSelectBox = (boxNumber) => {
        setSelectedBox(boxNumber);
    };

    const isBoxSelected = (boxNumber) => {
        return selectedBox === boxNumber;
    };
    return (
               <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", margin: 30 }}>Choose Truck</Text>
            <TouchableOpacity onPress={() => handleSelectBox(1)}>
                <View style={[styles.box, isBoxSelected(1) && styles.selectedBox]}>
                    <View style={{ width: 150 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 3 }}>Jumbo Box</Text>
                        <Text style={{ color: '#949599' }}>GROSS VEHICLE WEIGHT</Text>
                        <Text style={{ color: '#263238', fontWeight: 'bold', marginTop: 5 }}>2700 KG</Text>
                    </View>
                    <Image style={{ width: 125, height: 41 }} source={require('../../assets/images/Waddicar1.png')} />
                    {isBoxSelected(1) && <Image source={CheckIcon} style={styles.icon} />}
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSelectBox(2)}>
                <View style={[styles.box, isBoxSelected(2) && styles.selectedBox]}>
                    <View style={{ width: 150 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 3 }}>Jumbo Box</Text>
                        <Text style={{ color: '#949599' }}>GROSS VEHICLE WEIGHT</Text>
                        <Text style={{ color: '#263238', fontWeight: 'bold', marginTop: 5 }}>5200 KG</Text>
                    </View>
                     <Image style={{ width: 125, height: 58 }} source={require('../../assets/images/Waddicar2.png')} />
                    {isBoxSelected(2) && <Image source={CheckIcon} style={styles.icon} />}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectBox(3)}>
                <View style={[styles.box, isBoxSelected(3) && styles.selectedBox]}>
                    <View style={{ width: 150 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 3 }}>Jumbo Box</Text>
                        <Text style={{ color: '#949599' }}>GROSS VEHICLE WEIGHT</Text>
                        <Text style={{ color: '#263238', fontWeight: 'bold', marginTop: 5 }}>5200 KG</Text>
                    </View>
                    <Image style={{ width: 110, height: 60 }} source={require('../../assets/images/Waddicar3.png')} />
                    {isBoxSelected(3) && <Image source={CheckIcon} style={styles.icon} />}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectBox(4)}>
                <View style={[styles.box, isBoxSelected(4) && styles.selectedBox]}>
                    <View style={{ width: 150 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 3 }}>Jumbo Box</Text>
                        <Text style={{ color: '#949599' }}>GROSS VEHICLE WEIGHT</Text>
                        <Text style={{ color: '#263238', fontWeight: 'bold', marginTop: 5 }}>2700 KG</Text>
                    </View>
                    <Image style={{ width: 125, height: 58 }} source={require('../../assets/images/Waddicar4.png')} />
                    {isBoxSelected(4) && <Image source={CheckIcon} style={styles.icon} />}
                </View>
            </TouchableOpacity>

            <NextButton onPress={() => navigation.navigate('CreateOrder_addons')} />
            <BackButton onPress={() => navigation.navigate('CreateOrder_trucks')} />
        </SafeAreaView>
    )
}

export default ChooseTruck

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgba(87, 152, 249, 0.11)',
        width: 325,
        height: 105,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#F2F3F9'
    },
    selectedBox: {
        borderColor: '#415BF6',
        borderWidth:2.5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 80
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
    },
    icon:{
        width:44,
        height:44,
        position:'absolute',
        right:-15,
        bottom:-10

    }
})