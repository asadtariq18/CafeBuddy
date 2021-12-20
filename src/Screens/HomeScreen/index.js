import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  LogBox,
  TouchableOpacity,
} from "react-native";
// import ContextMenu from "react-native-context-menu-view";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Card from "../../Components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../assets/COLORS";
import OrdersList from "../../Components/OrdersList";
import RNRestart from "react-native-restart";
import database from "../../Database/database";

const HomeScreen = ({ navigation }) => {
  //const navigation = useNavigation();
  const [pending, setPending] = useState(false);
  const [upcoming, setUpcoming] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [ordersList, setOrdersList] = useState([]);
  LogBox.ignoreLogs([
    "Setting a timer for a long period of time",
    `fontFamily "Roboto_medium" is not a system font and has not been loaded through Font.loadAsync.

- If you intended to use a system font, make sure you typed the name correctly and that it is supported by your device operating system.

- If this is a custom font, be sure to load it with Font.loadAsync.`,
    `VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.`,
    "`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.",
    `Each child in a list should have a unique "key" prop.`,
  ]);
  useEffect(() => {
    let orders = database.getOrders("trp123");
    if (orders) {
      setOrdersList(Object.values(orders));
    }
  }, [pending, completed, upcoming]);

  const pendingList = () => {
    // RNRestart.Restart();
    setPending(true);
    setCompleted(false);
    setUpcoming(false);
  };
  const completedList = () => {
    setCompleted(true);
    setPending(false);
    setUpcoming(false);
  };
  const upcomingList = () => {
    setUpcoming(true);
    setPending(false);
    setCompleted(false);
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleEditMenu = () => {
    navigation.navigate("Order");
  };
  const onLogoutPress = () =>{
    alert("Logout")
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg4.jpeg")}
        style={styles.screenView}
      >
        <StatusBar style="auto" />
        <View
          style={{
            backgroundColor: "#ff94",
            marginBottom: 10,
            borderRadius: 20,
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              marginHorizontal: 5,
              marginTop: 50,
              alignSelf: "flex-start",
            }}
          >
            <Text style={styles.heading1}>Cafe Name</Text>
          </View>
          <TouchableOpacity onPress={onLogoutPress}>
          <View
            style={{
              marginHorizontal: 0,
              marginTop: 50,
              alignSelf: "flex-start",
            }}
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/276/276363.png",
              }}
            />
            <Text style={styles.text}>Logout</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 5,
            marginTop: 10,
            alignSelf: "flex-start",
          }}
        >
          <Text style={styles.heading2}>Menu</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 10,
            marginStart: 10,
            flexDirection: "row",
          }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Menu")}>
            <View style={styles.titleUnfocused}>
              <Image
                style={styles.image}
                source={require("../../assets/menu.png")}
              />
              <Text style={styles.text}>Menu</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Update Menu")}
          >
            <View style={styles.titleUnfocused}>
              <Image
                style={styles.image}
                source={require("../../assets/editMenu.png")}
              />
              <Text style={styles.text}>Edit Menu</Text>
            </View>
          </TouchableWithoutFeedback>

          {/* {showMenu ? (
            <ContextMenu
              actions={[{ title: "Title 1" }, { title: "Title 2" }]}
              onPress={(e) => {
                console.warn(
                  `Pressed ${e.nativeEvent.name} at index ${e.nativeEvent.index}`
                );
              }}
            >
              <View style={styles.yourOwnStyles} />
            </ContextMenu>
          ) : null} */}
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignSelf: "flex-start",
            flexDirection: "row",
          }}
        >
          {/* <TouchableWithoutFeedback onPress={handleShowMenu}>
            <Icon
              style={{ alignSelf: "flex-end", marginEnd: 10 }}
              name="menu"
              color={COLORS.button}
            />
          </TouchableWithoutFeedback> */}
        </View>
        <View style={styles.topView}>
          <View style={{ marginHorizontal: 5 }}>
            <Text style={styles.heading2}>Orders</Text>
          </View>
        </View>
        <View style={{ width: "100%", height: "50%" }}>
          <View style={styles.title}>
            <TouchableWithoutFeedback onPress={upcomingList}>
              {upcoming ? (
                <View style={styles.titleFocused}>
                  <Text style={styles.text2}>Upcoming</Text>
                </View>
              ) : (
                <View style={styles.titleUnfocused}>
                  <Text style={styles.text}>Upcoming</Text>
                </View>
              )}
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={pendingList}>
              {pending ? (
                <View style={styles.titleFocused}>
                  <Text style={styles.text2}>Pending</Text>
                </View>
              ) : (
                <View style={styles.titleUnfocused}>
                  <Text style={styles.text}>Pending</Text>
                </View>
              )}
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={completedList}>
              {completed ? (
                <View style={styles.titleFocused}>
                  <Text style={styles.text2}>Completed</Text>
                </View>
              ) : (
                <View style={styles.titleUnfocused}>
                  <Text style={styles.text}>Completed</Text>
                </View>
              )}
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.listContainer}>
            {upcoming ? (
              <OrdersList ordersList={ordersList} status={"New"} />
            ) : null}
            {pending ? (
              <OrdersList ordersList={ordersList} status={"Accepted"} />
            ) : null}
            {completed ? (
              <OrdersList ordersList={ordersList} status={"Completed"} />
            ) : null}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenView: {
    flex: 1,
  },
  topView: {
    alignSelf: "flex-start",
    marginVertical: 20,
    marginTop: 10,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  titleFocused: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#0044",
    alignItems: "center",
    justifyContent: "center",
  },
  titleUnfocused: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#ffe2",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    minHeight: "70%",
    flexWrap: "wrap",
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#ffe2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 5,
    marginHorizontal: 20,
    color: COLORS.font,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginHorizontal: 20,
    color: COLORS.font,
    fontWeight: "bold",
  },
  heading1: {
    fontSize: 29,
    alignSelf: "flex-start",
    marginHorizontal: 20,
    color: COLORS.font,
    fontWeight: "bold",
  },
  heading2: {
    fontSize: 25,
    alignSelf: "center",
    marginTop: 5,
    marginHorizontal: 20,
    color: COLORS.font,
    fontWeight: "bold",
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 0,
    alignSelf: "center",
  },
});
export default HomeScreen;
