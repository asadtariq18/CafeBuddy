import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../assets/COLORS";
const Button = ({ focused, text }) => {
  if (focused) {
    return (
      <View style={styles.titleFocused}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.titleUnfocused}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  titleFocused: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleUnfocused: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#fff4",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginHorizontal: 30,
    color: COLORS.secondary,
    fontWeight: "bold",
  },
});
export default Button;
