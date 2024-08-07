import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router"; 

const SignIn = () => {
  const router = useRouter(); 

  const handleSignIn = () => {
    router.push("/OtpScreen"); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/images/evpe_si.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.textConatiner}>
        <Text style={styles.text}>Sign In to your Account</Text>
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Registered Mobile Number"
          keyboardType="phone-pad"
        />
        <View style={styles.btnview}>
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>or</Text>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.TextOfCreateAccount}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};  

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  img: {
    flex: 1,
    resizeMode: "contain",
  },
  textConatiner: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 60,
  },
  text: {
    color: "#6425B2",
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

export default SignIn;
