import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import ContextMenu from "react-native-context-menu-view";
import { Icon } from "react-native-elements";
import Card from "../../Components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../assets/COLORS";
import OrdersList from "../../Components/OrdersList";

const HomeScreen = () => {
  const [pending, setPending] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const pendingList = () => {
    setPending(true);
    setCompleted(false);
  };
  const completedList = () => {
    setPending(false);
    setCompleted(true);
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#ffafbd", "#ffc3a0"]} style={styles.screenView}>
        <StatusBar style="auto" />
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            marginTop: 70,
            marginEnd: 25,
          }}
        >
          <TouchableWithoutFeedback onPress={handleShowMenu}>
            <Icon name="menu" color={COLORS.secondary} />
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
        <View style={styles.topView}>
          <View style={{ marginHorizontal: 5 }}>
            <Text style={styles.heading1}>Drawer</Text>
            <TouchableWithoutFeedback onPress={pendingList}>
              <View style={styles.titleUnfocused}>
                <Text style={styles.text}>Edit Menu</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={{ width: "100%", height: "50%" }}>
          <View style={styles.title}>
            <TouchableWithoutFeedback onPress={pendingList}>
              {pending ? (
                <View style={styles.titleFocused}>
                  <Text style={styles.text}>Pending</Text>
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
                  <Text style={styles.text}>Completed</Text>
                </View>
              ) : (
                <View style={styles.titleUnfocused}>
                  <Text style={styles.text}>Completed</Text>
                </View>
              )}
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.listContainer}>
            {pending ? (
              <OrdersList status={"pending"} />
            ) : (
              <OrdersList status={"completed"} />
            )}
          </View>
        </View>
      </LinearGradient>
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
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  titleFocused: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#f343",
    alignItems: "center",
    justifyContent: "center",
  },
  titleUnfocused: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#fff4",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    minHeight: "70%",
    flexWrap: "wrap",
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#fff4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginHorizontal: 30,
    color: COLORS.secondary,
    fontWeight: "bold",
  },
  heading1: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginHorizontal: 30,
    color: COLORS.secondary,
    fontWeight: "bold",
  },
});
export default HomeScreen;
