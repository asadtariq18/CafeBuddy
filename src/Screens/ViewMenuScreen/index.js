import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import ContextMenu from "react-native-context-menu-view";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Card from "../../Components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../assets/COLORS";
import OrdersList from "../../Components/OrdersList";
import MenuList from "../../Components/MenuList";

const ViewMenuScreen = ({ navigation }) => {
  //const navigation = useNavigation();
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);

  const onChangeItemName = (val) => {
    setItemName(val);
  };
  const onChangePrice = (val) => {
    setPrice(val);
  };

  const handleAdd = () => {
    // navigation.navigate("Order")
    alert(price);
  };
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
          }}
        >
          <View
            style={{
              marginHorizontal: 5,
              marginTop: 50,
              alignSelf: "flex-start",
            }}
          >
            <Text style={styles.heading1}>Menu</Text>
          </View>
        </View>
        <MenuList />
        {/* <ActivityIndicator color={COLORS.button} size={50} />
       <Text style={styles.text}> Loading Menu</Text> */}
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
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  titleFocused: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: COLORS.button,
    alignItems: "center",
    justifyContent: "center",
  },
  titleUnfocused: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
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
    backgroundColor: "#fff0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    marginHorizontal: 20,
    color: COLORS.background_dark,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginHorizontal: 20,
    color: COLORS.font,
    fontWeight: "bold",
  },
  heading1: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginHorizontal: 20,
    color: COLORS.font,
    fontWeight: "bold",
  },
  heading2: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 20,
    color: COLORS.button,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#eee0",
    borderWidth: 1,
    borderColor: COLORS.primary,
    fontSize: 15,
    height: 50,
    width: 350,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    color: COLORS.background_dark,
  },
});
export default ViewMenuScreen;
