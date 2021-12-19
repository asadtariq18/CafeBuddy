import React, { useState } from "react";
import {
  Text,
  View,
  Image,
} from "react-native";
import styles from "./style";

const Item = ({ image, name, price, quantity }) => {
//   const item = {
//     quantity: quantity,
//     price: price,
//     name: name,
//     image: image,
//   };

  return (
    <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <View style={styles.container}>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
            }}
            source={{ uri: image }}
          />
          <View style={{ alignSelf: "center" }}>
            <Text numberOfLines={1} style={styles.name}>
              {name}{" "}
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <Text numberOfLines={1} style={styles.text}>
            {quantity}{" "}
          </Text>

          <Text numberOfLines={1} style={styles.text}>
            RS. {price * quantity}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Item;
