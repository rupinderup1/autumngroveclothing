// SplashScreen.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreenwewe = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../images/logo.jpg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Customize background color if needed
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Adjust image resize mode as per your image
  },
});

export default SplashScreenwewe;
