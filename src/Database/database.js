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

async function addItemToMenu(cafeID, itemName, image, price) {
  let timestamp = moment().format("YYYYMMDDhhmmss");
  let itemID = `item${timestamp}`;
  let imageUrl = await uploadImage(image);
  firebase.database().ref(`db/menus/${cafeID}/${itemID}`).update({
    itemID: itemID,
    name: itemName,
    price: price,
    image: imageUrl,
    quantity: 1,
  });
}

function getMenu(cafeID) {
  let menu;
  firebase
    .database()
    .ref(`db/menus/${cafeID}`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      menu = temp;
    });
  if (menu) {
    return menu;
  }
}

const uploadImage = async (uri) => {
  let timestamp = moment().format("YYYYMMDDhhmmss");
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase
    .storage()
    .ref()
    .child("image" + timestamp);
  const snapshot = await ref.put(blob);
  blob.close();

  const url = await snapshot.ref
    .getDownloadURL()
    .then((result) => {
      return result;
    })
    .catch((error) => console.log(error));

  return url;
};

export default {
  getOrders,
  orderAccept,
  addItemToMenu,
  getMenu,

};
