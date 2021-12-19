import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import OrderHead from "./OrderHead";
// import orders from "../Database/orders";
import { COLORS } from "../assets/COLORS";
import database from "../Database/database";
// import database from "../Database/database";

const OrdersList = ({ ordersList,status }) => {
  console.log(ordersList)
  const [isEmpty, setIsEmpty] = useState(false);
  // const [ordersList, setOrdersList] = useState([]);
  // useEffect(() => {
  //   let list = [];
  //   let orders = database.getOrders("Alaska");
  //   // console.log(orders)
  //   if (orders) {
  //     setOrdersList(Object.values(orders));
  //   }
  //   console.log(ordersList)
  // }, []);
  if (!ordersList) {
    return <ActivityIndicator size={"large"} color={COLORS.primary} />;
  }
  if (ordersList.length < 1) {
    return (
      <Text style={{ color: COLORS.background_dark }}>
        {" "}
        No Orders Available{" "}
      </Text>
    );
  }
  return (
    <FlatList
      style={{ marginTop: 8 }}
      data={ordersList}
      keyExtractor={({ orderID }) => orderID}
      renderItem={({ item }) => {
        console.log(status)
        console.log(item.status)
        if (item.status === status) {
          return <OrderHead order={item} />;
        }
      }}
    />
  );
};
export default OrdersList;
