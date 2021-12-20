import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import styles from "./style";
import database from "../../Database/database";
import { COLORS } from "../../assets/COLORS";

const UpdateMenuScreen = () => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const onChangeItemName = (input1) => {
    setItemName(input1);
    if (input1 !== "" && price !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const onChangePrice = (input2) => {
    setPrice(input2);
    if (itemName !== "" && input2 !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const onAddPress = async () => {
    if (itemName !== "" && price !== 0) {
      database.addItemToMenu("Aaska123", itemName, image, price);
      setPrice(0);
      setItemName("");
      setImage("");
      alert("add pressed");
    } else {
      alert("Fill all the fields");
    }
  };

  const onAddImagePress = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        setImage(data.uri);
      }
    } else {
      Alert.alert("you need to give permission to work");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg4.jpeg")}
        style={styles.screenView}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <View>
          {image ? (
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          ) : (
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37lYTYwMRhc3E8mqHP9-ip6856c95LOwKU-1uVC2TkbDnePWy5OieKxIg-FDSFHAcEs8&usqp=CAU",
              }}
            />
          )}
          <TouchableOpacity onPress={onAddImagePress}>
            <Text style={styles.button2}>Add Image</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Food Item Name"
            value={itemName}
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary}
            style={styles.textInput}
            onChangeText={(value) => onChangeItemName(value.trim())}
          ></TextInput>

          <TextInput
            keyboardType="number-pad"
            value={price}
            placeholder="Price"
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary}
            style={styles.textInput}
            onChangeText={(value) => onChangePrice(value.trim())}
          ></TextInput>

          <TouchableOpacity onPress={onAddPress}>
            {isEmpty ? (
              <View style={styles.buttonView}>
                <Text style={styles.button1}>Add Item</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.button2}>Add Item</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default UpdateMenuScreen;
