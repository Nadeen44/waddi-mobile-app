import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import ProgressBar from '../../Components/ProgressBar';
import NextButton from '../../Components/NexButton';
import BackButton from '../../Components/BackButton';


function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleScreenTouch = () => {
    // Dismiss the keyboard
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <View style={styles.container}>
        <ProgressBar progress={100} startPoint={75} />

        <View style={styles.content}>
          <Text style={styles.title}>What’s your name ?</Text>
          <Text style={styles.subtitle}>Lets us know how to properly address you</Text>

          <TextInput
            style={styles.input}
            onChangeText={handleFirstNameChange}
            value={firstName}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleLastNameChange}
            value={lastName}
            placeholder="Last Name"
          />
        </View>
        <NextButton onPress={() => navigation.navigate('Payment')} />
        <BackButton onPress={() => navigation.navigate('Email')}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  content: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: 20,
  },
  input: {
    fontWeight: '500',
    height: 40,
    width: '100%',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical:22,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});

export default SignUpScreen;
