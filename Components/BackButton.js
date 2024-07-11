import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const BackButton = ({ onPress, navigationAction , customPosition}) => {
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
          {/* <Text style={styles.nextButtonText}>Next</Text> */}
          <Image source={require('../assets/images/back (2).png')} style={styles.nextButtonIcon} />
        </TouchableOpacity>
      );
    };

const styles = StyleSheet.create({
  nextButton: {
    position: 'absolute',
    left: 30,
    bottom: 60,
    backgroundColor: '#EFEFEF',
    paddingVertical: 22,
    width:52,
    borderRadius: 30,
    // alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    marginLeft:25,
  },
  nextButtonIcon: {
    resizeMode:'contain',
    width: 25,
    height: 20,
    position: 'absolute',
    left: 13,
    top:12,
    // tintColor: '#FFFFFF',
  },
//   customPosition: {
//     position: 'absolute',
//     right: 20,
//     top: 700,
//   },
});

export default BackButton;
