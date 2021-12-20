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
  ImageBackground,
  Keyboard,
} from "react-native";
import { Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Database from "../../Database/database";
import { COLORS } from "../../assets/COLORS";
import Firebase from "../../Firebase/Firebase";

const auth = Firebase.auth();

const SignUpScreen = () => {
  const [cafeName, setCafeName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [isValidCafeName, setIsValidCafeName] = useState(false)
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

  const navigation = useNavigation();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
     
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
     
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onChangeCafeName = (str) => {
    if (ValidateCafeName(str)) {
      setCafeName(str);
    }
  };

  const onChangePhone = (str) => {
    if (ValidatePhone(str)) {
      setPhone(str);
    }
  };

  const onChangePass = (str) => {
    if (ValidatePass(str)) {
      setPassword(str);
    }
  };

  const ValidateCafeName = (str) => {
    var hasNumber = /\d/;
    var re = /[A-Za-z][A-Za-z]+/;
    if (!hasNumber.test(str) && re.test(str) && str !== "") {
      setCafeName(str);
      setIsValidCafeName(true);
    } else {
      setIsValidCafeName(false);
    }
  };

  const ValidatePhone = (str) => {
    const re =
      /03[0-9]{9}/;
    if (re.test(String(str).toLowerCase())) {
      setPhone(str);
      setIsValidPhone(true)
    } else {
      setIsValidPhone(false);
    }
  };

  const ValidatePass = (str) => {
    if (str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
      setPassword(str);
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false)
    }
  };

  const onSignUpPress = async () => {
    try {
      if (phone !== "" && password !== "") {
       await auth.createUserWithPhoneNumber(phone).then(() => {
         // navigation.navigate("Email Verification Screen", { phone });
         // Database.storeUserData(
         //   firstName,
         //   lastName,
         //   mail.toLowerCase(),
         //   gender
         // );
         // ToastAndroid.showWithGravity(
         //   "Your account has been created",
         //   ToastAndroid.SHORT,
         //   ToastAndroid.BOTTOM
         // );
         ToastAndroid.showWithGravity(
           "Your account has been created",
           ToastAndroid.SHORT,
           ToastAndroid.BOTTOM
         );
       });
      }
    } catch (error) {
      console.log(error.message);
      if (
        error.message ===
        "The email address is already in use by another account."
      ) {
        ToastAndroid.showWithGravity(
          error.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      } else {
        ToastAndroid.showWithGravity(
          "An error occurred while signing up, please try again",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      }
    }
  };

  const onLoginPress = () => {
    navigation.navigate("Login");
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
          placeholder="Cafe Name"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          onChangeText={(value) => onChangeCafeName(value.trim())}
        ></TextInput>
      
        <TextInput
        maxLength={11}
          placeholder="Phone Number"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          onChangeText={(value) => onChangePhone(value.trim())}
          keyboardType={"number-pad"}
        ></TextInput>
        <View style={styles.passwordInput}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary}
            style={{ color: COLORS.font_black, width: 300 }}
            onChangeText={(value) => onChangePass(value.trim())}
            secureTextEntry
          ></TextInput>
          <Icon
            name="checkmark-circle"
            style={{
              fontSize: 25,
              color: isValidPassword ? COLORS.primary : "gray",
            }}
          />
        </View>
        {isValidPhone &&
        isValidCafeName &&
        isValidPassword 
         ? 
          <TouchableOpacity onPress={onSignUpPress}>
            <View style={styles.buttonView}>
              <Text style={styles.button2}>Sign up</Text>
            </View>
          </TouchableOpacity>
       : 
          <View style={styles.buttonView}>
            <Text style={styles.button1}>Sign up</Text>
          </View>
        }

        <Text style={styles.text}>Already have account?</Text>
        <TouchableOpacity onPress={onLoginPress}>
          <Text style={styles.button3}>Log in</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
};
export default SignUpScreen;
