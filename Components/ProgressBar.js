import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const ProgressBar = ({ progress, startPoint }) => {
  const widthAnimation = useRef(new Animated.Value(startPoint)).current;

  useEffect(() => {
    Animated.timing(widthAnimation, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress, startPoint, widthAnimation]);

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: widthAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '85%',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  progressBar: {
    backgroundColor: '#415BF6',
    height: 5,
    borderRadius: 15,
  },
});

export default ProgressBar;
