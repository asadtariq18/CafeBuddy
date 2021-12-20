import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Linking,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../assets/COLORS";
import OrderDetail from "../../Components/OrderDetail";
import database from "../../Database/database";

const OrderScreen = ({ route }) => {
  const navigation = useNavigation();
  const { order } = route.params.order;
  console.log(order);
  const orderDetails = order.orderDetails;

  const handleLocationPress = () => {
    Linking.openURL(order.location);
  };
  const handleAcceptPress = () => {
    database.orderAccept(order.userID, order.orderID, order.cafeID);
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg4.jpeg")}
        style={styles.screenView}
      >
        <StatusBar style="auto" />
        <View
          style={{
            backgroundColor: "#ff94",
            marginBottom: 10,
            borderRadius: 20,
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              marginHorizontal: 5,
              marginTop: 50,
              alignSelf: "flex-start",
            }}
          >
            <Text style={styles.heading1}>Order Detail</Text>
          </View>
        </View>
        <View style={{ marginTop: 0 }}>
          <OrderDetail
            basket={orderDetails}
            total={order.total}
            location={order.location}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: Dimensions.get("window").height / 2.4,
              backgroundColor: "#ff94",
              marginBottom: 10,
              borderRadius: 20,
              paddingVertical: 40,
            }}
          >
            <TouchableOpacity
              style={{ marginEnd: 4, alignSelf: "baseline" }}
              onPress={handleLocationPress}
            >
              <Text style={styles.button}> Location </Text>
            </TouchableOpacity>
            {order.status === "New" ? (
              <TouchableOpacity style={{}} onPress={handleAcceptPress}>
                <Text style={styles.button2}> Accept Order </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screenView: {
    flex: 1,
  },
  heading1: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginHorizontal: 20,
    color: COLORS.font,
    fontWeight: "bold",
  },
  button2: {
    color: COLORS.font,

    backgroundColor: "#4C9A2A",
    fontSize: 16,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  button: {
    color: COLORS.font,
    fontSize: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
});
export default OrderScreen;
