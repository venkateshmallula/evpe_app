
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={60}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ImageBackground
            source={require("../assets/images/bg.png")}
            style={styles.background}
            resizeMode="contain"
          >
            <View style={styles.logoContainer}>
              <Image
                source={require("../assets/images/evpe_logo.png")}
                style={styles.logo}
              />
            </View>
            <BlurView intensity={250} style={styles.blurView}>
              <Text style={styles.text}>Sign In to your Account</Text>
              <Text style={styles.label}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your Registered Mobile Number"
                keyboardType="phone-pad"
              />
              <View style={styles.btnview}>
                <TouchableOpacity style={styles.signInButton}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>or</Text>
                <TouchableOpacity style={styles.createAccountButton}>
                  <Text style={styles.TextOfCreateAccount}>Create Account</Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 21,
    resizeMode: "cover",
    borderRadius: 9,
  },
  blurView: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    margin: 9,
    marginTop: 450,
  },
  text: {
    color: "black",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },
  label: {
    color: "black",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#CACACA",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  btnview: {
    alignItems: "center",
  },
  signInButton: {
    backgroundColor: "#03FFA7",
    width: "100%",
    height: 50,
    padding: 13,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "black",
    fontSize: 16,
  },
  createAccountButton: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 20,
    width: 218,
    height: 50,
    alignItems: "center",
  },
  TextOfCreateAccount: {
    color: "#00FFA7",
  },
});

export default home;
