import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../assets/COLORS";
const Card = ({ color, text }) => {
  return (
    <View style={[styles.cardContainer, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: Dimensions.get("window").height / 10,
    width: Dimensions.get("window").width / 2.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  text: {
    fontSize: 16,
    color: COLORS.font,
    fontWeight: "bold",
  },
});
export default Card;
