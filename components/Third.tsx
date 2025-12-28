import {
  Modal,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";

const Third = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleOn = () => setToggle(true);
  const toggleOff = () => setToggle(false);
  return (
    <ImageBackground
      source={require("../assets/nature.jpg")}
      style={[styles.natureImage, styles.center]}
    >
      <Pressable style={[styles.btn, styles.center]}>
        <Text style={styles.btnText} onPress={toggleOn}>
          See details
        </Text>
      </Pressable>
      {toggle && (
        <Modal animationType="fade" style={[styles.modal, styles.center]}>
          <Text>This is a secret information</Text>
          <Pressable onPress={toggleOff} style={styles.exitBtn}>
            <Image
              source={require("../assets/exit.png")}
              style={styles.exitIcon}
            />
          </Pressable>
        </Modal>
      )}
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
  modal: {
    position: "relative",
  },
  exitBtn: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  exitIcon: {
    width: 30,
    height: 30,
  },
});
