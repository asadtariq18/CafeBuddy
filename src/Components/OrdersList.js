import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import OrderHead from "./OrderHead";
import orders from "../Database/orders";
import { COLORS } from "../assets/COLORS";

// import database from "../Database/database";

const OrdersList = ({ status }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [ordersList, setOrdersList] = useState([]);
  useEffect(() => {
    let list = [];
    orders.forEach((order) => {
      if (order.status === status) {
        list.push(order);
      }
    });
    setOrdersList(list);
  }, [status]);
  if (ordersList.length < 1) {
    return (
      <Text style={{ color: COLORS.background_dark }}>
        {" "}
        No Orders Available{" "}
      </Text>
    );
  }
  if (!ordersList) {
    return <ActivityIndicator size={"large"} color={COLORS.primary} />;
  }
  return (
    <FlatList
      style={{ marginTop: 8 }}
      data={ordersList}
      keyExtractor={({ orderID }) => orderID}
      renderItem={({ item }) => {
        return (
          <OrderHead
            orderID={item.orderID}
            cafeID={item.cafeID}
            status={item.status}
          />
        );
      }}
    />
  );
};
export default OrdersList;
