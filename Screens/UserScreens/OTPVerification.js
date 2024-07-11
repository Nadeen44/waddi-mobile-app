import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../../Components/Button';
import ProgressBar from '../../Components/ProgressBar';

// Import the image for the erase button
import EraseImage from '../../assets/images/Fill 1.png';

const OTPVerification = ({ navigation }) => {
  const [otp, setOtp] = React.useState(['', '', '', '']);
  const [focusedInput, setFocusedInput] = React.useState(0);

  // Assuming progress is a value between 0 and 100 representing the progress percentage
  const progress = 50;

  // Function to handle keyboard input
  const handleKeyboardInput = (text, index) => {
    // Validate input to allow only digits
    const formattedText = text.replace(/[^0-9]/g, '');
    let updatedOtp = [...otp]; 
    updatedOtp[index] = formattedText;
    setOtp(updatedOtp);
    if (text.length === 0 && index > 0) {
      // Move focus to the previous input when the current input is cleared
      setFocusedInput(index - 1);
    } else if (index < 3 && text.length === 1) {
      // Move focus to the next input when a digit is entered
      setFocusedInput(index + 1);
    }
  };

  // Function to render each OTP input box
  const renderOtpInput = (index) => (
    <TextInput
      key={index}
      value={otp[index]}
      onChangeText={(text) => handleKeyboardInput(text, index)}
      keyboardType="visible-password" // Set keyboardType to 'visible-password'
      maxLength={1}
      style={[styles.otpInput, focusedInput === index && styles.focusedInput]}
      autoFocus={index === 0}
      onFocus={() => {
        setFocusedInput(index);
      }}
      onBlur={() => setFocusedInput(null)}
      editable={false} // Disable editing
    />
  );

  // Function to render custom keyboard buttons
  const renderCustomKeyboardButton = (value) => {
    if (value === 'erase') {
      return (
        <TouchableOpacity
          key={value}
          style={[styles.customKeyboardButton, { width: 100 }]} // Width for erase button
          onPress={() => handleErase()}
        >
          {/* Wrap the Image component within a Text component */}
          <Text style={{width:10,height:10}}>
            <Image source={EraseImage} />
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          key={value}
          style={[styles.customKeyboardButton, value === 0 ? { width: 100,marginLeft:130 } : null]} // Adjust width for zero button
          onPress={() => handleKeyboardInput(value.toString(), focusedInput)}
        >
          <Text style={styles.customKeyboardButtonText}>{value}</Text>
        </TouchableOpacity>
      );
    }
  };

  // Function to handle erase button press
  const handleErase = () => {
    if (focusedInput > 0) {
      // Clear the value of the focused input
      let updatedOtp = [...otp];
      updatedOtp[focusedInput] = '';
      setOtp(updatedOtp);
      // Move focus to the previous input
      setFocusedInput(focusedInput - 1);
    }
  };

return (
    <View style={{ flex: 1, backgroundColor: '#FAFAFA', paddingTop: 45 }} edges={['right', 'bottom', 'left']}>
      <ProgressBar progress={25} startPoint={15} />
      <View style={{ flex: 1, padding: 16 }}>
        <StatusBar hidden />
        <Text style={{ fontWeight: 'bold', fontSize: 23, textAlign: 'center' }}>Verify Phone Number</Text>
        <Text style={{ width: 240, fontSize: 13, textAlign: 'center', alignSelf: 'center', marginTop: 20 }}>Please enter the 4 digit code sent to <Text style={{ color: "#415BF6" }}> +20 10 919 227 49</Text> through SMS</Text>
        <View style={styles.container}>
          <View style={{
            backgroundColor: "#fff", padding:20, shadowColor: '#808B96',
            shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.3,
            shadowRadius: 4, borderRadius: 12,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              {Array.from({ length: 4 }, (_, index) => renderOtpInput(index))}
            </View>
            <Button title='Confirm' onPress={() => { navigation.navigate("Verified") }} style={{ marginTop: 20, alignSelf: 'center' }} />
          </View>
          <Text style={{ fontSize: 14, textAlign: 'center', alignSelf: 'center', marginTop: 15, color: "#7E7E7E" }}>Didn’t receive a code?<Text style={{ color: '#415BF6' }}>Resend SMS </Text> </Text>

        </View>

      </View>
      <View style={styles.customKeyboard}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, , 0, 'erase'].map((value) => renderCustomKeyboardButton(value))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpInput: {
    alignItems:'center',
    justifyContent:'center',
    width: 55,
    height: 55,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E5E5E5',
    fontSize: 20,
    margin:10
  },
  focusedInput: {
    borderColor: '#415BF6',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customKeyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#415BF6',
    borderRadius: 20,

  },
  customKeyboardButton: {
    width: 100,
    height: 60,
    margin: 11,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customKeyboardButtonText: {
    fontSize: 29,
    color: '#FFFFFF',
    fontWeight: "bold"
  },
  eraseButtonImage: {
    width: 10,
    height: 10,
  },
});

export default OTPVerification;