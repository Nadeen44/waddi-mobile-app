import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GreyToPurpleLine from '../../Components/AnimatedLine'
import NextButton from '../../Components/NexButton'
import BackButton from '../../Components/BackButton'

const CreateOrder_addons = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ paddingLeft: 40, paddingTop: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Create Order</Text>
        <Text style={{ color: '#6A6A6A', width: 230, paddingTop: 15 }}>You can now create order by filling that data below</Text>
      </View>
      <View style={{ flexDirection: 'row', display: 'flex', marginTop: 35 }}>
        <View style={styles.progessBar}>
          <Image style={styles.circle} source={require('../../assets/images/blueCircle.png')}></Image>
          <Image style={styles.Line} source={require('../../assets/images/greyLine.png')}></Image>
          <Image style={styles.circle} source={require('../../assets/images/greyCircle.png')}></Image>
          <Image style={styles.Line} source={require('../../assets/images/greyLine.png')}></Image>
          <Image style={styles.circle} source={require('../../assets/images/greyCircle.png')}></Image>
          <Image style={styles.Line} source={require('../../assets/images/greyLine.png')}></Image>
          <Image style={styles.circle} source={require('../../assets/images/greyCircle.png')}></Image>          


        </View>
        <View>
          <View style={{ backgroundColor: 'rgba(87, 152, 249, 0.11)', width: 294, height: 81, borderRadius: 9, borderColor: '#415BF6', borderWidth: 1, marginTop: 30, flexDirection: 'row', display: 'flex', padding: 10 }}>
            <Image style={{ height: 42, width: 46 , alignSelf:'center'}} source={require('../../assets/images/Location.png')}></Image>
            <View style={{  marginLeft: 5 ,alignSelf:'center'}}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#263238',marginLeft: 5 }}>Address<Text style={{ color: '#415BF6' }}>*</Text></Text>
              <View style={{ flexDirection: 'row', display: 'flex', marginTop: 5}}>
                {/* <Image style={{ width: 29, height: 28 }} source={require('../../assets/images/Frame4.png')} /> */}
                <Text style={{ color: '#7F7E7E', marginTop: 0, marginLeft: 5, width:250 }}>Add your pickup and drop-off locations</Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: 'rgba(87, 152, 249, 0.11)', width: 294, height: 81, borderRadius: 9, borderColor: '#D9D9D9', borderWidth: 1, marginTop: 30, flexDirection: 'row', display: 'flex', padding: 10 }}>
            <Image style={{ height: 42, width: 46 ,alignSelf:'center'}} source={require('../../assets/images/Frame3.png')}></Image>
            <View style={{  marginLeft: 5 ,alignSelf:'center' }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#263238' }}>Commodity<Text style={{ color: '#415BF6' }}>*</Text></Text>
              <View style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                {/* <Image style={{ width: 29, height: 28 }} source={require('../../assets/images/Frame4.png')} /> */}
                <Text style={{ color: '#7F7E7E', marginTop: -1, marginLeft: 5 }}>Pick what you’re shipping</Text>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: 'rgba(87, 152, 249, 0.11)', width: 294, height: 81, borderRadius: 9, borderColor: '#D9D9D9', borderWidth: 1, marginTop: 30, flexDirection: 'row', display: 'flex', padding: 10 }}>
            <Image style={{ height: 40, width: 49, marginLeft:3, alignSelf:'center'}} source={require('../../assets/images/Waddi car icons (5).png')}></Image>
            <View style={{  marginLeft: 5 ,alignSelf:'center'}}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#263238' }}>Trucks<Text style={{ color: '#415BF6' }}>*</Text></Text>
              <View style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                {/* <Image style={{ width: 29, height: 28 }} source={require('../../assets/images/Frame4.png')} /> */}
                <Text style={{ color: '#7F7E7E', marginTop: -1, marginLeft: 5 }}>Pick your desired truck type</Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: 'rgba(87, 152, 249, 0.11)', width: 294, height: 81, borderRadius: 9, borderColor: '#D9D9D9', borderWidth: 1, marginTop: 30, flexDirection: 'row', display: 'flex', padding: 10 }}>
            <Image style={{ height: 42, width: 46 , alignSelf:'center'}} source={require('../../assets/images/Worker.png')}></Image>
            <View style={{ marginLeft: 5 ,alignSelf:'center'}}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#263238' }}>Add-Ons<Text style={{ color: '#415BF6' }}>*</Text></Text>
              <View style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                <Text style={{ color: '#7F7E7E', marginTop: -1, marginLeft: 5 }}>Pick the add-ons you may need</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <NextButton onPress={() => navigation.navigate('AddressMap')} />
      <BackButton onPress={() => navigation.navigate('Profile')} />
    </SafeAreaView>
  )
}

export default CreateOrder_addons

const styles = StyleSheet.create({
  progessBar: {
    display: 'flex',
    width: 32,
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
    paddingTop: 20
  },
  circle: {
    width: 32,
    height: 32,
    marginBottom: 20,
    marginTop: 20
  },
  Line: {
    width: 3,
    height: 50
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 120
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