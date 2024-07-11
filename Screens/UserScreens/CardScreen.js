import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, Switch } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ProgressBar from '../../Components/ProgressBar';

const CardScreen = () => {
  const navigation = useNavigation();
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [isDefault, setIsDefault] = useState(true); // State for default switch

  const skipNavigation = () => {
    navigation.navigate("Welcome");
  };

  const handleExpiryMonthChange = (text) => {
    // Ensure only numbers and within 2 digits
    if (/^\d{0,2}$/.test(text)) {
      setExpiryMonth(text);
    }
  };

  const handleExpiryYearChange = (text) => {
    // Ensure only numbers and within 2 digits
    if (/^\d{0,4}$/.test(text)) {
      setExpiryYear(text);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleAddNow = () => {
    // Add now logic here
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <ProgressBar progress={100} startPoint={75} />

        <TouchableOpacity onPress={skipNavigation} style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Enter your credit card details</Text>
          </View>
          <Text style={styles.subtitle}>By continuing you agree to our Terms</Text>
        </View>

        <Image source={require('../../assets/images/Visa.png')} style={styles.cardImage} />

        {/* Credit card input fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cardholder Name"
            onChangeText={setCardHolderName}
          />
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            keyboardType="numeric"
            maxLength={16}
            // onChangeText={handleCardNumberChange}
          />
          <View style={styles.expiryInputContainer}>
            <TextInput
              style={[styles.input, styles.expiryInput]}
              placeholder="EXP Month"
              keyboardType="numeric"
              maxLength={2}
              value={expiryMonth}
              onChangeText={handleExpiryMonthChange}
            />
        
            <TextInput
              style={[styles.input, styles.expiryInput]}
              placeholder="EXP Year"
              keyboardType="numeric"
              maxLength={4}
              value={expiryYear}
              onChangeText={handleExpiryYearChange}
            />
          </View>
          
          <View style={styles.cvvInputContainer}>
            <TextInput
              style={styles.cvvInput}
              placeholder="CVV"
              keyboardType="numeric"
              maxLength={3}
              // onChangeText={handleCVVChange}
            />
            <Text style={styles.cvvText}>3 or 4 digits usually found on the signature strip</Text>
          </View>

          <View style={styles.defaultSwitchContainer}>
            <Switch
              trackColor={{ false: "#000", true: "#415BF6" }}
              // thumbColor={isDefault ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#fff"
              onValueChange={setIsDefault}
              value={isDefault}
            />
            <Text style={styles.defaultSwitchText}>Set as default</Text>
          </View>

          <TouchableOpacity onPress={handleAddNow} style={styles.addNowButton}>
            <Text style={styles.addNowButtonText}>Add Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    paddingVertical: 65,
    // paddingHorizontal: 30,
  },
  content: {
    paddingTop: 8,
    marginRight: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: 20,
  },
  skipButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  skipButtonText: {
    color: '#415BF6',
    fontSize: 13,
    fontWeight: '500',
  },
  cardImage: {
    width: 191.7,
    height: 105.3,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    alignSelf:'flex-start',
    paddingHorizontal: 20,
  },
  input: {
    height: 48,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:'#fff',
    fontWeight: '700',
    marginRight: 10,
  },
  expiryInputContainer: {
    flexDirection: 'row',
    alignSelf:'flex-start',

  },
  expiryInput: {
    flex: 1,
    // marginRight: 10,
  },
  cvvInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cvvInput: {
    height: 48,
    width: 167,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:'#fff',
    fontWeight: '700',
    marginRight: 10,
  },
  cvvText: {
    fontSize: 13,
    width:200,
    paddingHorizontal:15,
    marginBottom:19,
    color: '#999999',
  },
  defaultSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:35,
  },
  defaultSwitchText: {
    fontSize: 16,
    marginLeft:10,
    // color:'#999999',
    fontWeight:'500',
  },
  addNowButton: {
    backgroundColor: '#415BF6',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 40,
    width:'100%',
  },
  addNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
   alignSelf:'center',
  },
});

export default CardScreen;
