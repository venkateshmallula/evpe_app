import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OTPInput = ({ length, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    // If text is not empty and it's the current field, move to the next one
    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    // Update OTP state
    setOtp(newOtp);

    // Pass the OTP value to the parent component
    onChange(newOtp.join(""));
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          ref={(ref) => (inputs.current[index] = ref)}
          secureTextEntry={true} // This masks the input with dots
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 25,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#FFF",
    marginHorizontal: 5,
  },
});

export default OTPInput;
