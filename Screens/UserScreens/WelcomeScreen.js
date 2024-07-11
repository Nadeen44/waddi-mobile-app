import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';




export default function WelcomeScreen() {


  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Profile'); // Navigate to the next screen after 2 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [navigation]);

  return (
    <View style={styles.container} >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to,</Text>
        {/* Add your logo image here */}
        <Image
          source={require('../../assets/images/Layer_1 (2).png')} // Replace this with your image source
          style={styles.logo}
        />
         <Image
          source={require('../../assets/images/Delivery-rafiki 2.png')} // Replace this with your image source
          style={styles.image}
        />

        {/* Button positioned absolutely */}
      {/* <TouchableOpacity
        style={styles.buttonContainer}
        // onPress={() => navigation.navigate('FinishUp')}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    color : '#263238',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight:'400',
  },
  logo: {
    // color : '#fff',
    width: 231, // Adjust width as needed
    height: 113, // Adjust height as needed
    resizeMode: 'contain', // Adjust the resize mode as needed
  },

  buttonContainer: {
    position: 'absolute', // Position the container absolutely
    top: '85%', // Set the button container's top to the middle of the screen
    right: 10, // Align with the right edge of the screen with a slight offset
    backgroundColor: '#415BF6', // Background color
    borderRadius: 25, // Border radius
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10, // Add vertical padding
  },
  buttonText: {
    color: 'white', // Font color
    fontSize: 16, // Font size
  },

  image: {
    resizeMode:  'contain',
    width : 406.64,
    height: 650,
}
});
