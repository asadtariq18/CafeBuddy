import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import OrderHead from "./OrderHead";
// import orders from "../Database/orders";
import { COLORS } from "../assets/COLORS";
import database from "../Database/database";
import MenuHead from "./MenuHead";
// import database from "../Database/database";

const MenuList = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [menuList, setMenuList] = useState(null)

  useEffect(() => {
    let menu = database.getMenu("Aaska123")
     setMenuList(Object.values(menu))
  }, [])

  if (!menuList) {
    return <ActivityIndicator size={"large"} color={COLORS.primary} />;
  }
  if (menuList.length < 1) {
    return (
      <Text style={{ color: COLORS.background_dark }}>
        {" "}
        No Items Available{" "}
      </Text>
    );
  }
  return (
    <FlatList
      style={{ marginTop: 8 }}
      data={menuList}
      keyExtractor={({ itemID }) => itemID}
      renderItem={({ item }) => {
        return <MenuHead item={item} />;
      }}
    />
  );
};
export default MenuList;
