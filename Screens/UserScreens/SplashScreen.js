import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('PhoneNumber');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={require('../../assets/images/Layer_1.png')}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#415BF6', // Match with the background color specified in app.json
  },
  image: {
    width: 269.89, // Adjust the size as needed
    height: 128.48,
  },
});

export default SplashScreen;