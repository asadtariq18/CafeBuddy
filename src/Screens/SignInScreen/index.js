import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
  StatusBar,
  Keyboard,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { Header } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { Icon } from "native-base";
import Database from "../../Database/database";
import database from "../../Database/database";
import { COLORS } from "../../assets/COLORS";
import Firebase from "../../Firebase/Firebase";

const auth = Firebase.auth();

const SignInScreen = () => {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [onFocus, setOnFocus] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    readUser();
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setOnFocus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setOnFocus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  const onChangePhone = (input1) => {
    // let reg = /[SP|FA|sp|fa|Sp|Fa][0-9][0-9]-[B|b][a-zA-Z][a-zA-Z]-\d\d\d@student\.comsats\.edu\.pk/;
    // if (reg.test(input1.toLowerCase()) == true) {
    setPhone(input1);
    if (input1 !== "" && password !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
    // }
    // else{
    //   dispatch(isEmptyChange(true));

    // }
  };

  const onChangePass = (input2) => {
    setPassword(input2);
    if (phone !== "" && input2 !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const onLoginPress = async () => {
    try {
      if (phone !== "" && password !== "") {
        setLoggingIn(true);
        await auth.signInWithEmailAndPassword(phone, password);
        if (auth.currentUser.emailVerified === false) {
          ToastAndroid.showWithGravityAndOffset(
            "Verify Your email first.",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            25,
            50
          );
          navigation.navigate("Email Verification Screen", { mail });
        } else {
          Database.getUpdatedUserData(mail);
          const user = database.getCurrentUser();
          await AsyncStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setLoggingIn(false);
          ToastAndroid.showWithGravityAndOffset(
            "Logged in",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            25,
            50
          );
          navigation.getParent.navigate("AppStack");
        }
      }
    } catch (error) {
      if (
        error.message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        setLoggingIn(false);
        ToastAndroid.showWithGravityAndOffset(
          "This email address is not registered",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50
        );
      } else if (
        error.message ===
        "The password is invalid or the user does not have a password."
      ) {
        setLoggingIn(false);
        ToastAndroid.showWithGravityAndOffset(
          "Wrong credentials",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50
        );
      } else {
        setLoggingIn(false);
        ToastAndroid.showWithGravityAndOffset(
          "An error occurred",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50
        );
      }
    }
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };
  const onForgotPasswordPress = () => {
    navigation.navigate("Forgot Password");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={styles.screenView}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <View>
          <TextInput
            keyboardType="number-pad"
            placeholder="Phone Number"
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary}
            style={styles.textInput}
            onChangeText={(value) => onChangePhone(value.trim())}
          ></TextInput>

          <View style={styles.passwordInput}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={COLORS.font_secondary}
              selectionColor={COLORS.primary}
              style={{ color: COLORS.font_black, width: 300 }}
              onChangeText={(value) => onChangePass(value.trim())}
              secureTextEntry={hidePass}
            ></TextInput>
            <Icon
              name="eye"
              style={{
                fontSize: 25,
                color: password === "" ? "grey" : COLORS.primary,
              }}
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
          <TouchableOpacity onPress={onLoginPress}>
            {isEmpty ? (
              <View style={styles.buttonView}>
                <Text style={styles.button1}>Log in</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                {loggingIn ? (
                  <ActivityIndicator size="large" color={COLORS.primary} />
                ) : (
                  <Text style={styles.button2}>Log in</Text>
                )}
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={onForgotPasswordPress}>
            <Text style={styles.button3}>Forgot Password?</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Don't have account?</Text>
          <TouchableOpacity onPress={onSignUpPress}>
            <Text style={styles.button3}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default SignInScreen;
