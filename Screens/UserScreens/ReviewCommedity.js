import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NextButton from '../../Components/NexButton';
import BackButton from '../../Components/BackButton';
import GreyToPurpleLine from '../../Components/AnimatedLine';

const CreateOrder_review = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ paddingLeft: 40, paddingTop: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Create Order</Text>
                <Text style={{ color: '#6A6A6A', width: 230, paddingTop: 15 }}>You can now create order by filling that data below</Text>
            </View>
            <View style={{ flexDirection: 'row', display: 'flex', marginTop: 35 }}>
                <View style={styles.progessBar}>
                    <Image style={styles.circle} source={require('../../assets/images/greenCircle.png')}></Image>
                    <Image style={styles.Line} source={require('../../assets/images/greenLine.png')}></Image>
                    <Image style={styles.circle} source={require('../../assets/images/greenCircle.png')}></Image>
                    <Image style={styles.Line} source={require('../../assets/images/greenLine.png')}></Image>
                    <Image style={styles.circle} source={require('../../assets/images/greyCircle.png')}></Image>
                    <Image style={styles.Line} source={require('../../assets/images/greyLine.png')}></Image>
                    <Image style={styles.circle} source={require('../../assets/images/greyCircle.png')}></Image>


                    
                    
                </View>
                <View>
                    <View style={{ flexDirection: 'row', display: 'flex', backgroundColor: 'rgba(87, 152, 249, 0.11)', width: 294, height: 119, borderRadius: 9, borderColor: '#01E17B', borderWidth: 1 }}>
                        <Image source={require('../../assets/images/Group 35.png')} style={{ width: 44, height: 44, margin: 10 }} ></Image>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#263238' }}>Address<Text style={{ color: '#415BF6' }}>*</Text></Text>
                            <View style={{ flexDirection: 'row', display: 'flex' }}>
                                <Image source={require('../../assets/images/Frame 57.png')} style={{ height: 61, width: 18, marginTop: 5 }}></Image>
                                <View style={{ marginTop: 8 }}>
                                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 5 }}>Pick-up from</Text>
                                        <ScrollView style={{ width: 100 }} horizontal={true}  ><Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>29WR+3H5,Mansoura Qism 2,El Mansoura</Text></ScrollView>
                                    </View>
                                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
                                        <Text style={{ color: '#7F7E7E', fontSize: 13, marginLeft: 5 }}>Delivery to</Text>
                                        <ScrollView style={{ width: 100 }} horizontal={true}  ><Text style={{ color: '#263238', fontWeight: 'bold', marginLeft: 15 }}>87WR+34H5,Mansoura Qism 2,El Mansoura</Text></ScrollView>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'rgba(87, 152, 249, 0.11)', width: 294, height: 81, borderRadius: 9, borderColor: '#415BF6', borderWidth: 1, marginTop: 20, flexDirection: 'row', display: 'flex', padding: 10 }}>
                        <Image style={{ height: 42, width: 46 }} source={require('../../assets/images/Frame3.png')}></Image>


<View style={{ marginLeft: 5 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#263238' }}>Commodity<Text style={{ color: '#415BF6' }}>*</Text></Text>
                            <View style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                                <Image style={{ width: 29, height: 28 }} source={require('../../assets/images/chair.png')} />
                                <Text style={{ color: '#7F7E7E', marginTop: 5, marginLeft: 5 }}>Furnitures are selected</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'rgba(87, 152, 249, 0.11)', width: 294, height: 81, borderRadius: 9, borderColor: '#D9D9D9', borderWidth: 1, marginTop: 30, flexDirection: 'row', display: 'flex', padding: 10 }}>
                        <Image style={{ height: 43, width: 55 }} source={require('../../assets/images/trucks2.png')}></Image>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#263238' }}>Trucks<Text style={{ color: '#415BF6' }}>*</Text></Text>
                            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                                {/* <Image style={{ width: 28, height: 27.25 }} source={require('../../assets/images/jumboboxselected.png')} /> */}
                                <Text style={{ color: '#7F7E7E', marginTop: -1, marginLeft: 5 }}>Pick your desired truck type</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'rgba(87, 152, 249, 0.11)', width: 294, height: 81, borderRadius: 9, borderColor: '#D9D9D9', borderWidth: 1, marginTop: 30, flexDirection: 'row', display: 'flex', padding: 10 }}>
                        <Image style={{ height: 38.72, width: 38.72 }} source={require('../../assets/images/Worker2.png')}></Image>
                        <View style={{ marginLeft: 5 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#263238' }}>Add-Ons<Text style={{ color: '#415BF6' }}>*</Text></Text>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: '#7F7E7E', marginTop: -1, marginLeft: 5 }}>Pick the add-ons you may need</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <NextButton onPress={() => navigation.navigate('CreateOrder_trucks')} />
            <BackButton onPress={() => navigation.navigate('Commedity')} />


        </SafeAreaView>

    )
};

export default CreateOrder_review;


const styles = StyleSheet.create({
    progessBar: {
        display: 'flex',
        width:32,
        height:100,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight:20,
        marginLeft:20,
        paddingTop:10
      },
      circle: {
        width: 32,
        height: 32,
        marginBottom:20,
        marginTop:20
      },
      Line: {
        width: 3,
        height: 50
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
})