// import React, { useEffect } from "react";
// import * as firebase from "firebase";
// import moment from "moment";
// import Firebase from "../config/Firebase";
// import "firebase/firestore";
// import database from "@react-native-firebase/database";

// const db = firebase.firestore();
// const auth = Firebase.auth();

// function getOrders(cafeID) {
//     let orders;
//   firebase
//     .database()
//     .ref(`db/FoodOrders/${cafeID}`)
//     .on("value", (snapshot) => {
//       const temp = snapshot.val();
//       orders = temp;
//     });
//   return orders;
// }
// export default {
//   getOrders,

// }