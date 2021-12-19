import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/COLORS";
import OrderDetail from "../../Components/OrderDetail";

const OrderScreen = ({ route }) => {
  const { order } = route.params.order;
  console.log(order);
  const orderDetails = order.orderDetails;

  const handleLocationPress = () => {
    Linking.openURL(order.location);
  };
  const handleAcceptPress = () => {
    database.orderAccept(order.userID, order.orderID, order.cafeID);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{order.orderID}</Text>
      <Text>Detail</Text>
      {/* <View style={{flexDirection: 'row'}}>
        <Text>Quantity</Text>
        <Text>Price</Text>
      </View> */}
<OrderDetail basket={orderDetails} total={order.total} location={order.location}/>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ marginEnd: 4 }}
          onPress={handleLocationPress}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.button}> Location </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={handleAcceptPress}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.button2}> Accept </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    color: COLORS.font,
    backgroundColor: "#006400",
    fontSize: 16,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  button: {
    color: COLORS.font,
    fontSize: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
export default OrderScreen;
