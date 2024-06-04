import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation();

  const handleRightButtonPress = () => {
    // Handle the press event of the right button
    alert("You pressed the right button!");
  };

  const handleAlert = () => {
    Alert.alert("Autumn Groove", "Do you really want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => navigation.navigate("LoginScreen"),
      },
    ]);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 12, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={handleAlert} style={{ paddingVertical: 15 }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "NunitoSans-Light",
              marginLeft: 5,
            }}
          >
            Logout ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
