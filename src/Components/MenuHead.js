import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../assets/COLORS";
import database from "../Database/database";

const MenuHead = ({ item }) => {
  const navigation = useNavigation();
  useEffect(() => {}, [item]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
          <View style={{}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>
              {/* {moment(order.timestamp, "YYYYMMDDhhmmss").fromNow()}{" "} */}
              Price: {item.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
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
    fontSize: 25,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 2,

    fontWeight: "bold",
    color: COLORS.font,
  },
  price: {
    fontSize: 15,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 2,

    fontWeight: "bold",
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
  image: {
    width: 40,
    height: 40,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 5,
  },
});
export default MenuHead;
