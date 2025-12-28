import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";

const Third = () => {
  return (
    <ImageBackground
      source={require("../assets/nature.jpg")}
      style={[styles.natureImage, styles.center]}
    >
      <Pressable style={[styles.btn, styles.center]}>
        <Text style={styles.btnText}>See details</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default Third;

const styles = StyleSheet.create({
  natureImage: {
    flex: 1,
  },
  btn: {
    width: 150,
    height: 40,
    borderRadius: 60,
    backgroundColor: "#ffffffff",
  },
  btnText: {
    fontSize: 18,
    color: "#000",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
