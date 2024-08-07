import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import OTPInput from "../components/OTPInput"; // Adjust the path as necessary
import { useRouter } from "expo-router"; 

const OtpScreen = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleVerify = () => {
    router.push("/VerifyScreen");
  };


  const handleOtpChange = (value) => {
    setOtp(value);
    // Handle the OTP change (e.g., form validation, API call)
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/otp.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>OTP has been Sent to +91xxxxxxx21</Text>
        <View style={styles.otpContainer}>
          <OTPInput length={6} onChange={handleOtpChange} />
          <Text style={styles.otpTime}>00:15</Text>
        </View>
        <View>
          <Text style={styles.otper}>
            Can’t receive the OTP?{"  "}
            <Text style={styles.colortext}>Resend OTP</Text>
          </Text>
        </View>
      </View>
      <View style={styles.verifybtnContainer}>
        <TouchableOpacity style={styles.VInButton} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    width: 260,
    height: 650,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    marginTop: 300,
    alignItems: "center",
  },
  infoText: {
    fontSize: 18,
    marginTop: 50,
    fontWeight: "400",
  },
  otpContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  otpTime: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 30,
  },
  otper: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 30,
  },
  colortext: {
    color: "#6425B2",
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  VInButton: {
    backgroundColor: "#03FFA7",
    width: "100%",
    height: 50,
    padding: 13,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  verifybtnContainer: {
    flex: 1,
    marginTop: 200,
    paddingHorizontal: 30,
  },
});

export default OtpScreen;
