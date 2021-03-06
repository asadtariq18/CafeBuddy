import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking
} from "react-native";
import { COLORS } from "../assets/COLORS";
import Item from "./Item";
import styles from "./Item/style";

const OrderDetail = ({basket, total, location}) => {

  const handleLocationPress = () => {
    Linking.openURL(location);
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: "#ff94",
          marginBottom: 10,
          borderRadius: 20,
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <Text style={styles.label}> Quantity </Text>
          <Text style={styles.label}> Price </Text>
        </View>
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
          data={basket}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Item
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          )}
        />

        {/* <TouchableOpacity onPress={handleLocationPress}>
      <View
        style={{
          backgroundColor: COLORS.secondary,
          width: Dimensions.get("window").width,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.total}> Location </Text>
      </View>
      </TouchableOpacity> */}
      </View>
      <View
        style={{
          backgroundColor: "#ff95",
          borderRadius: 50,
          width: Dimensions.get("window").width,
          height: 80,
          marginBottom: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.total}> Total </Text>
        <Text style={styles.total}> Rs. {total} </Text>
      </View>
    </View>
  );
};
export default OrderDetail;
