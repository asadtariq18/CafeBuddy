import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Icon,
  Button,
} from "react-native";
import AppStack from "./src/Navigation/AppStack";
import HomeScreen from "./src/Screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import UpdateMenuScreen from "./src/Screens/UpdateMenuScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import { COLORS } from "./src/assets/COLORS";
import ViewMenuScreen from "./src/Screens/ViewMenuScreen";
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
const Stack = createStackNavigator();

export default function App() {
  function HeaderRight() {
    return (
      <TouchableOpacity onPress={() => alert("Hello")}>
        <Icon
          style={{ alignSelf: "flex-end", marginEnd: 10 }}
          name="menu"
          color={COLORS.button}
        />
      </TouchableOpacity>
    );
  }
  function HeaderBackground() {
    return (
      <View style={{ backgroundColor: "black" }}></View>
      // <Image
      //   style={{
      //     width: "100%",
      //     height: "100%",
      //   }}
      //   source={{
      //     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OduVzHnXu4aJjauilBiv9ydMyrpvDazTsp88vBgknzMKatxLP9RMJWqIL7VUcVAqG2M&usqp=CAU",
      //   }}
      // />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name={"Login"}
          component={SignInScreen}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
              color: COLORS.font,
            },
            headerLeft: null,

            // headerRight: (props) => <HeaderRight {...props} />,
            headerShown: false,
            headerStatusBarHeight: 10,
            headerBackground: (props) => <HeaderBackground {...props} />,
          }}
        />
        <Stack.Screen
          name={"SignUp"}
          component={SignUpScreen}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
              color: COLORS.font,
            },
            headerLeft: null,

            // headerRight: (props) => <HeaderRight {...props} />,
            headerShown: false,
            headerStatusBarHeight: 10,
            headerBackground: (props) => <HeaderBackground {...props} />,
          }}
        />
        <Stack.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 35,
              color: COLORS.font,
            },

            // headerRight: (
            //   <Button
            //     onPress={() => alert("This is a button!")}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
            // headerRight: (props) => <HeaderRight {...props} />,
            headerShown: false,
            headerStatusBarHeight: 25,
            headerBackground: (props) => <HeaderBackground {...props} />,
          }}
        />
        <Stack.Screen
          name={"Update Menu"}
          component={UpdateMenuScreen}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
              color: COLORS.font,
            },
            headerLeft: null,

            // headerRight: (props) => <HeaderRight {...props} />,
            headerShown: false,
            headerStatusBarHeight: 100,
            headerBackground: (props) => <HeaderBackground {...props} />,
          }}
        />
        <Stack.Screen
          name={"Menu"}
          component={ViewMenuScreen}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 35,
              color: COLORS.font,
            },
            headerLeft: null,

            // headerRight: (props) => <HeaderRight {...props} />,
            headerShown: false,
            headerStatusBarHeight: 100,
            headerBackground: (props) => <HeaderBackground {...props} />,
          }}
        />
        <Stack.Screen
          name={"Order Detail"}
          component={OrderScreen}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
              color: COLORS.font,
            },

            // headerRight: (props) => <HeaderRight {...props} />,
            headerShown: false,
            headerStatusBarHeight: 100,
            headerBackground: (props) => <HeaderBackground {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
