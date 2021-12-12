import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../assets/COLORS";

const OrderHead = ({ orderID, cafeID, status }) => {
  // useEffect(() => {
  // }, [orderID]);
  const onPress = () => {};
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.name}>{orderID} </Text>
        <Text style={styles.commentText}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#ffafbd",
    flexDirection: "row",
    marginBottom: 2,
    padding: 5,
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
  },
});
export default OrderHead;
