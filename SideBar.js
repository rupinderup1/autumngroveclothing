// import * as React from 'react';
import React, { useState } from "react";
import { Button, View, TouchableOpacity, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import ProductList from "./ProductList";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import CustomDrawer from "./CustomDrawer";
import LoginScreen from "./LoginScreen";
import ResetPasswordScreen from "./Forgot";
import SignUp from "./SignUp";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { fa0 } from "@fortawesome/free-solid-svg-icons/fa0";
import {
  faAppleWhole,
  faCartArrowDown,
  faCartFlatbedSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import CartList from "./CartList";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// function SideBar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <SidebarScreen {...props} />}>
//           <Drawer.Screen name="Home" component={Home} />
//         </Drawer.Navigator>
//       ) : (
//         <Stack.Navigator>
//           <Stack.Screen name="Login" component={LoginScreen} />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

function MyDrawer() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity
            style={{ width: 44 }}
            onPress={() => navigation.navigate("CartList")}
          >
            <FontAwesomeIcon icon={faCartArrowDown} />
          </TouchableOpacity>
        ),
        headerTintColor: "black",
        drawerLabelStyle: { fontFamily: "NunitoSans-Light", fontSize: 17 },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="New Arrivals" component={ProductList} />
      <Drawer.Screen name="Tops" component={ProductGrid} />
      <Drawer.Screen name="Bottoms" component={ProductList} />
      <Drawer.Screen name="Shoes" component={ProductList} />
      <Drawer.Screen name="Dresses" component={ProductList} />
      <Drawer.Screen name="Rompers/jumpsuits" component={ProductList} />
      <Drawer.Screen name="Swimwear" component={ProductList} />
      <Drawer.Screen name="Accessories" component={ProductList} />
      <Drawer.Screen name="Outerwear" component={ProductList} />
      <Drawer.Screen name="Collections" component={ProductList} />
      <Drawer.Screen name="Sets" component={ProductList} />
      <Drawer.Screen name="Graphic T's" component={ProductList} />
      <Drawer.Screen name="Basics" component={ProductList} />
      <Drawer.Screen name="Workout Gear" component={ProductList} />
      <Drawer.Screen name="Gift Cart" component={ProductList} />
    </Drawer.Navigator>
  );
}

function SideBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          headerTintColor="black"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide the navigation bar for this screen
        />

        <Stack.Screen
          name="MyDrawer"
          headerTintColor="black"
          component={MyDrawer}
          options={{ headerShown: false }} // Hide the navigation bar for this screen
        />

        <Stack.Screen
          name="Forgot"
          headerTintColor="black"
          component={ResetPasswordScreen}
          options={{ headerShown: true }} // Hide the navigation bar for this screen
        />

        <Stack.Screen
          name="SignUp"
          headerTintColor="black"
          component={SignUp}
          options={{ headerShown: true }} // Hide the navigation bar for this screen
        />

        <Stack.Screen
          name="ProductDetails"
          headerTintColor="black"
          component={ProductDetails}
          options={{ headerShown: true }} // Hide the navigation bar for this screen
        />

        <Stack.Screen
          name="CartList"
          headerTintColor="black"
          component={CartList}
          options={{ headerShown: true }} // Hide the navigation bar for this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SideBar;