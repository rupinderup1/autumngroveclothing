import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import CustomDrawer from "./CustomDrawer";
import CartList from "./CartList";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
import SideBarValue from "./SideBar";
import { Formik } from "formik";
import * as Yup from "yup";
import { API_URL, Shopify_Access_Token } from "@env";

const apiUrl = API_URL;

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const loginCustomer = async (email, password) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": Shopify_Access_Token,
      },
      body: JSON.stringify({
        query: `
          mutation LoginCustomer {
            customerAccessTokenCreate(input: {
              email: "${email}",
              password: "${password}"
            }) {
              customerAccessToken {
                accessToken
              }
              customerUserErrors {
                field
                message
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    return { error: "An error occurred during login. Please try again." };
  }
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [rootView, setRootView] = useState("Login");

  const onPressLogin = () => {
    navigation.navigate("MyDrawer");
  };

  const onPressForgotPassword = () => {
    navigation.navigate("Forgot");
  };

  const onPressSignUp = () => {
    // Navigate to SignUp screen
    navigation.navigate("SignUp");
  };

  const onPressGuest = () => {
    // Navigate to Home screen
    navigation.navigate("MyDrawer");
  };

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const data = await loginCustomer(values.email, values.password);

        if (data.error) {
          Alert.alert("Login Error", data.error);
        } else if (
          data.data.customerAccessTokenCreate.customerUserErrors.length > 0
        ) {
          const errorMessages =
            data.data.customerAccessTokenCreate.customerUserErrors
              .map((err) => err.message)
              .join("\n");
          Alert.alert("Login Error", "Please enter correct credentials"); //errorMessages
          // setErrors({ api: "Please enter correct credentials" });
        } else {
          const accessToken =
            data.data.customerAccessTokenCreate.customerAccessToken.accessToken;
          // console.log("Access Token:", accessToken);
          await AsyncStorage.setItem("@login_token", accessToken);
          // Alert.alert("Login Successful", `Access Token: ${accessToken}`);
          navigation.navigate("MyDrawer");
        }

        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View style={styles.container}>
          <Image
            source={require("../images/logo.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholderTextColor="#003f5c"
            />
          </View>
          {touched.email && errors.email && (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{errors.email}</Text>
            </View>
          )}
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholderTextColor="#003f5c"
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
          </View>
          {touched.password && errors.password && (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{errors.password}</Text>
            </View>
          )}
          {errors.api && (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{errors.api}</Text>
            </View>
          )}
          <TouchableOpacity onPress={onPressForgotPassword}>
            <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
            <Text style={styles.loginText}>
              {isSubmitting ? "LOGGING IN..." : "LOGIN"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignUp}>
            <Text style={styles.forgotAndSignUpText}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressGuest} style={styles.loginBtn}>
            <Text style={styles.loginText}>Continue as a guest</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
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
  errorText: {
    fontSize: 12,
    color: "red",
    marginBottom: 8,
  },
  errorView: {
    width: "90%",
    marginTop: -15,
    marginBottom: 5,
    fontFamily: "NunitoSans-Regular",
  },
});

export default LoginScreen;
