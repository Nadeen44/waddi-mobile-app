import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import ProgressBar from '../../Components/ProgressBar';
import { useEffect } from 'react';

const Verified = ({ navigation }) => {
    const progress = 80;

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('Email');
        }, 2000); // 3 seconds
    
        return () => clearTimeout(timer);
      }, []);
    return (

        <View style={{ flex: 1,paddingTop:50,backgroundColor:'#fff' }}>
            <ProgressBar  progress={60} startPoint={25} />
            <StatusBar hidden />
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.VerifiedImg} source={require("../../assets/images/Group 2.png")} />
                <Text style={styles.Verifiedtxt} >Successfully Verified</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    VerifiedImg: {
        height: 133.29,
        width: 134.92
    },
    Verifiedtxt: {
        fontWeight: 'bold',
        fontSize: 23,
        marginTop: 15,
        textDecorationColor: "#212121"
    }
});

export default Verified;