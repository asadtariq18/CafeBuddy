import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen/index";
import OrderScreen from "../Screens/OrderScreen/index";


const Stack = createStackNavigator();
const AppStack = () => {
  const navigation = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
