import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from '../../Components/ProgressBar';
import NextButton from "../../Components/NexButton";
import BackButton from '../../Components/BackButton';


const PaymentScreen = () => {
  const [selected, setSelected] = useState("");
  const navigation = useNavigation();

  const onSelect = (key) => {
    setSelected(selected === key ? "" : key);
  };
  const handleNavigation = () => {
    if (selected === "cod") {
      navigation.navigate("Welcome");
    } else if (selected === "mobileBanking") {
      navigation.navigate("Cod");
    }
    else if (selected === "card") {
      navigation.navigate("Card");
    }
    // else {navigation.navigate("SignUp");}
  };

  const skipNavigation = () => 
  {
    navigation.navigate("Welcome");
  }


  return (
    <View style={styles.container}>

   {/* Progress bar */}
   <ProgressBar progress={100} startPoint={75} />

      <TouchableOpacity  onPress={skipNavigation} style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Select your preferred payment method</Text>
      </View>
      
      <TouchableOpacity
        style={styles.card}
        onPress={() => onSelect("cod")}
      >
        {/* <MaterialCommunityIcons name="cash" size={24} color="#415BF6" /> */}
        <Image source={require('../../assets/images/Wallet.png')} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.primaryText}>Cash on Delivery</Text>
          <Text style={styles.secondaryText}>Have the right money ready</Text>
        </View>
        {selected === "cod" ? (
          <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#415BF6" />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="grey" />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => onSelect("mobileBanking")}
      >
        {/* <MaterialCommunityIcons name="bank" size={24} color="#415BF6" /> */}

        <Image source={require('../../assets/images/instapay.png')} style={styles.cardImage} />

        <View style={styles.cardContent}>
          <Text style={styles.primaryText}>Mobile Banking</Text>
          <Text style={styles.secondaryText}>InstaPay</Text>
        </View>
        {selected === "mobileBanking" ? (
          <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#415BF6" />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="grey" />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        
        onPress={() => onSelect("card")}
      >
        {/* <MaterialCommunityIcons name="credit-card" size={24} color="#415BF6" /> */}
        <Image source={require('../../assets/images/creditcard.png')} style={styles.cardImage} />

        <View style={styles.cardContent}>
          <Text style={styles.primaryText}>Credit or Debit Card</Text>
          <Text style={styles.secondaryText}>VISA, MasterCard</Text>
        </View>
        {selected === "card" ? (
          <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#415BF6" />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="grey" />
        )}
      </TouchableOpacity>

      {/* <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleNavigation}
        >
          <Text style={styles.buttonText}>Next</Text>
          <Image source={require('../assets/images/Arrow 2 (1).png')} style={styles.nextButtonIcon} />
        </TouchableOpacity> */}

      <NextButton onPress={handleNavigation} />
      <BackButton onPress={() => navigation.navigate('SignUp')}/>



      


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    // paddingHorizontal:20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E9F0FA",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginHorizontal:20,

    // marginBottom:20,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 20,
    
  },
  cardImage: {
    width: 50, // Adjust the width of the image
    height: 50, // Adjust the height of the image
    marginRight: 15, // Add margin if needed
  },
  primaryText: {
    color: "#263238",
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryText: {
    color: "#7E7E7E",
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    // flex: 1,
    paddingTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },

  skipButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight: 30,
    marginBottom:5,
  },
  skipButtonText: {
    color: '#415BF6',
    fontSize: 13,
    fontWeight: '500',
  },

});

export default PaymentScreen;