// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet,Alert,TouchableOpacity } from 'react-native';

// const ResetPasswordScreen = () => {
//   const [email, setEmail] = useState('');

//   const handleResetPassword = () => {
//     // Here, you would implement the logic to send a reset password email
//     // For now, let's just log the entered email

//     Alert.alert('Reset Password', `An email will be sent to ${email} to reset your password.`);

//   };

//   return (
//     <View style={styles.container}>
//         <View style= {styles.subHeaderView}>
//         <Text style={styles.subHeader}>SHIPS FROM PEORIA, AZ</Text>

//         </View>

//       <Text style={styles.title}>Reset your password</Text>
//       <Text style={styles.description}>We will send you an email to reset your password.</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

// <TouchableOpacity
// onPress = {handleResetPassword}>
// <Text style={styles.containerbtn}>SUBMIT</Text>
// </TouchableOpacity>
// iPhone 15 Pro Maxclear

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 0,
//     marginTop:0,
//     backgroundColor: 'white',
//     flex: 1,
//   },

//   containerbtn: {
//     backgroundColor:"rgba(92, 92, 92, 1.0)",
//     height:45,
//     borderRadius: 20,
//     color:'white',
//     marginTop:20,
//     marginLeft: 15,
//     width: 100,
//     fontSize:11,
//     fontFamily: 'NunitoSans-Regular',
//     alignItems:"center",
//   },

//   title: {
//     left: 15,
//     fontSize: 24,
//     marginBottom: 10,
//     fontFamily: 'NunitoSans-Regular',

//   },
//   description: {
//     left: 15,
//     fontSize: 16,
//     marginBottom: 20,
//     fontFamily: 'NunitoSans-Regular',

//   },
//   input: {
//     width: '100%',
//     height: 40,
//     left: 15,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     fontFamily: 'NunitoSans-Regular',

//   },
//   subHeaderView: {
//     justifyContent: 'center',
//     backgroundColor: 'rgba(244, 246, 248, 1.0)',
// height: 25,
//   },
//   subHeader: {
//     textAlign: 'center',
//     fontSize: 12,
//     fontFamily:'NunitoSans-Regular',
//     flex: 1,
//     height: 25,

//   }
// });

// export default ResetPasswordScreen;
// // 'rgba(244, 246, 248, 1.0)',

import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const ResetPasswordScreen = () => {
  const navigation = useNavigation();

  // State variable to hold the user's email
  const [email, setEmail] = useState("");

  // Function to handle the reset password action
  const handleResetPassword = () => {
    // Here, you would implement the logic to send a reset password email
    // For now, let's just log the entered email
    console.log(`Reset password requested for email: ${email}`);

    // Display an alert to inform the user that a reset password email will be sent
    Alert.alert(
      "Reset Password",
      `An email will be sent to ${email} to reset your password.`
    );
  };
  const handlePress = () => {
    console.log("Touchable component pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.subHeaderView}>
        <Text style={styles.subHeaderLabel}>SHIPS FROM PEORIA, AZ</Text>
      </View>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.title}>Reset your password</Text>
          <Text style={styles.description}>
            We will send you an email to reset your password
          </Text>
        </View>
        <View style={{ top: 20, width: "100%" }}>
          <Text style={styles.inputHeader}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType={setEmail}
          ></TextInput>
          <TouchableOpacity onPress={handlePress} style={styles.touchable}>
            <Text style={styles.text}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "left",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    top: 15,
    fontFamily: "NunitoSans-Regular",
  },
  description: {
    top: 25,
    fontSize: 14,
    fontFamily: "NunitoSans-Regular",
  },
  inputHeader: {
    top: 12,
    fontSize: 14,
    fontFamily: "NunitoSans-Regular",
  },
  input: {
    padding: 8,
    width: "100%",
    fontFamily: "NunitoSans-Regular",
    fontSize: 17,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 2,
    top: 15,
  },
  subHeaderView: {
    height: 25,
    backgroundColor: "rgba(244, 246, 248, 1.0)",
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(92, 92, 92, 1.0)",
    width: "100%",
    top: 25,
    borderRadius: 2,
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "NunitoSans-SemiBold",
  },
  subHeaderLabel: {},
});

export default ResetPasswordScreen;
