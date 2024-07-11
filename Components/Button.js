import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = (props) => {
    return (
        <View style={{alignItems:"center",marginTop:30}}>
            <TouchableOpacity style={styles.Button} onPress={props.onPress}>
                <Text style={{color:"#FFFFFF",fontWeight:"600"}}>{props.title}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    Button: {
        width: 240,
        height: 41,
        backgroundColor: "#415BF6",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 25,

    }
});

export default Button