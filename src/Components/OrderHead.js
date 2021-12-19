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
  };
    const handleOrderDetails = () => {
      navigation.navigate("Order Detail", {order:{order}})
    };
    if(order.status === "Accepted"){
      return (
        <TouchableWithoutFeedback onPress={handleOrderDetails}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.name}>{order.orderID}</Text>
              <Text style={styles.name}>
                {/* {moment(order.timestamp, "YYYYMMDDhhmmss").fromNow()}{" "} */}
                Bill: {order.total}
              </Text>
              <Text style={styles.name}> </Text>
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
          <Text style={styles.name}>{order.orderID}</Text>
          <Text style={styles.name}>
            {/* {moment(order.timestamp, "YYYYMMDDhhmmss").fromNow()}{" "} */}
            Bill: {order.total}
          </Text>
          <Text style={styles.name}> </Text>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={handleLocationPress}
        >
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={styles.button}> Location </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={handleAcceptPress}
        >
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={styles.button2}> Accept </Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: COLORS.button,
    flexDirection: "row",
    marginBottom: 2,
    padding: 8,
    paddingVertical: 10
  },
  name: {
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
    paddingStart: 5
  },
  button2: {
    color: COLORS.font,
    backgroundColor: "#006400",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  button: {
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
export default OrderHead;
