import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Vibration } from 'react-native';

const Timer = ({ initialSeconds = 5000 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      Vibration.vibrate(); // Vibrate when the timer reaches zero
      return; // Exit useEffect early if timer is zero or less
    }

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval); // Clear the interval when the timer reaches zero
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
     <Text style={styles.timerText}> <Text style={styles.Text}>remains </Text>{formatTime(seconds)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
    marginTop: 5,
  },
  timerText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#415BF6',
  },
  Text: {
    fontWeight:'400',
  }

});

export default Timer;
