import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


const SignUp = () => {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate("Home");
  };
    
    
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
    
    
    
    const onPressSignUp = () => { };
    
  const onPressGuest = () => {
    navigation.navigate("Home");
  };

  const [state, setState] = useState({
    email: "",
    password: "",
  });
    
    
    
  return (
    <View style={styles.container}>
      <Image
        source={require("./images/logo.jpg")}
        style={styles.image}
        resizeMode="contain" // adjust resizeMode as needed
          />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ email: text })}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ email: text })}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ password: text })}
        />
      </View>

      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Create account </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>
          Log in with an existing account
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "NunitoSans-Regular",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
    fontFamily: "NunitoSans-Regular",
  },
  inputView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    borderWidth: 1,

    justifyContent: "center",
    padding: 10,
    fontFamily: "NunitoSans-Regular",
  },
  inputText: {
    height: 50,
    color: "black",
    fontFamily: "NunitoSans-Regular",
  },
  forgotAndSignUpText: {
    fontSize: 14,
    fontFamily: "NunitoSans-Regular",
    alignSelf: "flex-end",
  },
  loginText: {
    color: "white",
    fontSize: 14,
    fontFamily: "NunitoSans-Regular",
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "rgba(92, 92, 92, 1.0)",
    borderRadius: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    fontFamily: "NunitoSans-Regular",
  },
});
export default SignUp;
