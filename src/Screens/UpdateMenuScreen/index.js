import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
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

const UpdateMenuScreen = ({ navigation }) => {
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
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSER2bZits40wUm0l6ZmkL5vO6Pm2KXNxwXTw&usqp=CAU",
        }}
        style={styles.screenView}
      >
        <StatusBar style="auto" />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.text}>Add item to the menu</Text>
          <TextInput
            placeholder="Item name"
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary}
            style={styles.textInput}
            onChangeText={(value) => {
              onChangeItemName(value.trim());
            }}
          ></TextInput>
          <TextInput
            placeholder="Price"
            keyboardType={"number-pad"}
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary}
            style={styles.textInput}
            onChangeText={(value) => {
              onChangePrice(value.trim());
            }}
          ></TextInput>
            {itemName.length > 1 && price > 9 ? (
          <TouchableWithoutFeedback onPress={handleAdd}>
              <View style={styles.titleFocused}>
                <Text style={styles.text2}>Add to Menu</Text>
              </View>
          </TouchableWithoutFeedback>
            ) : (
              <View style={styles.titleUnfocused}>
                <Text style={styles.text}>Add to Menu</Text>
              </View>
            )}
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
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 15,
    marginHorizontal: 20,
    color: COLORS.background_dark,
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
    fontSize: 25,
    alignSelf: "flex-start",
    marginHorizontal: 20,
    color: COLORS.secondary,
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
export default UpdateMenuScreen;
