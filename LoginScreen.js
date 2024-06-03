import React, { useState } from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';




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
} from 'react-native';



import Home from './Desktop//Home';
import ProductList from './Desktop/ProductList';
import ProductDetails from './Desktop//ProductDetails';
import CustomDrawer from './Desktop//CustomDrawer';
import CartList from './Desktop//CartList';
import Forgot from './Desktop//Forgot';
import SignUp from './Desktop//SignUp';
import SideBarValue from './Desktop//SideBar';




const LoginScreen = () => {

    const onPressLogin = () => {

    };

    const onPressForgotPassword = () => {
    };

    const onPressSignUp = () => {
        // Navigate to SignUp screen
    };

    const onPressGuest = () => {
        // Navigate to Home screen
    };

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    return (
        <View style={styles.container}>
            
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ email: text })}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ password: text })}
                />
            </View>
            <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressSignUp}>
                <Text style={styles.forgotAndSignUpText}>Create account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressGuest} style={styles.loginBtn}>
                <Text style={styles.loginText}>Continue as a guest</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'NunitoSans-Regular',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40,
        fontFamily: 'NunitoSans-Regular',
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
        fontFamily: 'NunitoSans-Regular',
    },
    inputText: {
        height: 50,
        color: "black",
        fontFamily: 'NunitoSans-Regular',
    },
    forgotAndSignUpText: {
        fontSize: 14,
        fontFamily: 'NunitoSans-Regular',
        alignSelf: 'flex-end'
    },
    loginText: {
        color: "white",
        fontSize: 14,
        fontFamily: 'NunitoSans-Regular',
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
        fontFamily: 'NunitoSans-Regular',
    },
});

export default LoginScreen;
