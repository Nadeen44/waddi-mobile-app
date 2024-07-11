import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
// import ProgressBar from '../Components/ProgressBar';
import ProgressBar from "../../Components/ProgressBar";
import NextButton from "../../Components/NexButton";

function EmailScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleScreenTouch = () => {
    // Dismiss the keyboard
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <View style={styles.container}>
        <ProgressBar progress={60} startPoint={25} />

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Enter your email address</Text>
          </View>
          <Text style={styles.subtitle}>
            Add your email to aid in account recovery
          </Text>

          {/* TextInput for entering email address */}
          <TextInput
            style={styles.input}
            onChangeText={handleEmailChange}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <NextButton onPress={() => navigation.navigate("SignUp")} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  content: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: 20,
  },
  input: {
    fontWeight: "500",
    fontSize:15,
    height: 40,
    width: "100%",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 22,
    marginBottom: 20,
    backgroundColor: "white",
  },
});

export default EmailScreen;
