import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, Linking, TouchableWithoutFeedback } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../assets/COLORS";
import database from "../Database/database";

const OrderHead = ({ order }) => {
  const navigation = useNavigation()
  useEffect(() => {

  }, [order]);
  const handleLocationPress = () => {
    Linking.openURL(order.location);
  };
  const handleAcceptPress = () => {
    database.orderAccept(order.userID, order.orderID, order.cafeID);
    navigation.navigate("Home")
  };
    const handleOrderDetails = () => {
      navigation.navigate("Order Detail", {order:{order}})
    };
    if(order.status === "Accepted"){
      return (
        <TouchableWithoutFeedback onPress={handleOrderDetails}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.name}>{moment(order.timestamp, "YYYYMMDDhhmmss").fromNow()}</Text>
              <Text style={styles.name}>
                {/* {moment(order.timestamp, "YYYYMMDDhhmmss").fromNow()}{" "} */}
                Bill: {order.total}
              </Text>
              <Text style={styles.name}>Name: {order.customerName} </Text>
            </View>
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={handleLocationPress}
            >
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Text style={styles.button}> Location </Text>
              </View>
            </TouchableOpacity>
           
          </View>
        </TouchableWithoutFeedback>
      );
    }
  return (
    <TouchableWithoutFeedback onPress={handleOrderDetails}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>
            {moment(order.timestamp, "YYYYMMDDhhmmss").fromNow()}
          </Text>
          <Text style={styles.name}>
            {/* {moment(order.timestamp, "YYYYMMDDhhmmss").fromNow()}{" "} */}
            Bill: {order.total}
          </Text>
          <Text style={styles.name}>Name: {order.customerName}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={handleAcceptPress}
          >
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <Text style={styles.button2}> Accept </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={handleLocationPress}
          >
            <View style={{ flexDirection: "row", marginBottom: 2 }}>
              <Text style={styles.button}> Location </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#fe95",
    borderWidth: 0.5,
    borderColor: COLORS.primary,
    flexDirection: "row",
    marginBottom: 4,
    padding: 10,
    paddingVertical: 10,
  },
  name: {
    // backgroundColor: "#ff95",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 2,

    fontWeight: "bold",
    color: COLORS.font,
  },
  commentText: {
    color: COLORS.font,
  },
  timestamp: {
    color: COLORS.font_secondary,
    textAlign: "right",
    paddingHorizontal: 5,
    fontSize: 12,
  },
  content: {
    alignSelf: "center",
    paddingEnd: 40,
    paddingStart: 5,
  },
  button2: {
    color: COLORS.font,
    backgroundColor: "#4C9A2A",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  button: {
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
export default OrderHead;
