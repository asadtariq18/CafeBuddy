import React, { useEffect } from "react";
import * as firebase from "firebase";
import moment from "moment";
import Firebase from "../Firebase/Firebase";
import "firebase/firestore";
import database from "@react-native-firebase/database";

const db = firebase.firestore();
const auth = Firebase.auth();

function getOrders(cafeID) {
  let orders;
  firebase
    .database()
    .ref(`db/FoodOrders/cafes/${cafeID}`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      orders = temp;
    });
  if (orders) {
    // console.log(Object.values(orders))
    return orders;
  }
}

function orderAccept(userID, orderID, cafeID) {
  firebase.database().ref(`db/FoodOrders/cafes/${cafeID}/${orderID}`).update({
    status: "Accepted",
  });
  firebase
    .database()
    .ref(`db/FoodOrders/customers/${userID}/${orderID}`)
    .update({
      status: "Accepted",
    });
}
export default {
  getOrders,
  orderAccept,
};
