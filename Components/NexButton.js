import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const NextButton = ({ onPress, navigationAction , customPosition}) => {
    const handlePress = () => {
      if (onPress) {
        onPress();
      }
      if (navigationAction) {
        navigationAction();
      }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.nextButton, customPosition && styles.customPosition]}>
          <Text style={styles.nextButtonText}>Next</Text>
          <Image source={require('../assets/images/Arrow 2 (1).png')} style={styles.nextButtonIcon} />
        </TouchableOpacity>
      );
    };

const styles = StyleSheet.create({
  nextButton: {
    position: 'absolute',
    right: 30,
    bottom: 60,
    backgroundColor: '#415BF6',
    paddingVertical: 12,
    width:110,
    borderRadius: 27,
    // alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    marginLeft:22,
  },
  nextButtonIcon: {
    resizeMode:'contain',
    width: 20,
    height: 15,
    position: 'absolute',
    right: 26,
    top:15,
    // tintColor: '#FFFFFF',
  },
//   customPosition: {
//     position: 'absolute',
//     right: 20,
//     top: 700,
//   },
});

export default NextButton;
