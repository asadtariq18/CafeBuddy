import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../assets/COLORS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenView: {
    justifyContent: "center",
    flex: 1,
  },
  passwordInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.font,
    fontSize: 15,
    height: 50,
    width: 350,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    color: "black",
  },
  text: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
    color: COLORS.font,
    textShadowColor: COLORS.font_black,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 0.1,
  },
  text2: {
    fontSize: 10,
    color: COLORS.font_secondary,
    paddingHorizontal: 50,
    paddingVertical: 15,
    textShadowColor: COLORS.font_black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.1,
  },

  textInput: {
    backgroundColor: COLORS.font,
    alignSelf: "center",
    fontSize: 15,
    height: 50,
    width: 350,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    color: "black",
  },
  buttonView: {
    paddingVertical: 2,
    marginTop: 10,
  },
  button2: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  button1: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.font_black,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  button3: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    borderRadius: 25,
    paddingHorizontal: 45,
    paddingVertical: 15,
    textShadowColor: COLORS.font_black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.1,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 60,
    marginBottom: 5,
  },
});

export default styles;
