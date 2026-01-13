import {
  Modal,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Image,
  View,
} from "react-native";
import React, { useState } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { TabParamList } from "../navigation/TabNavigator";
import { RootStackParamList } from "../Main";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Third">,
  NativeStackScreenProps<RootStackParamList>
>;
const Third = ({ navigation }: Props) => {
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
        <Modal animationType="fade">
          <View style={[styles.modal, styles.center]}>
            <Text style={{ fontSize: 30 }}>This is a secret information</Text>
            <Pressable onPress={toggleOff} style={styles.exitBtn}>
              <Image
                source={require("../assets/exit.png")}
                style={styles.exitIcon}
              />
            </Pressable>
          </View>
        </Modal>
      )}
      <Pressable
        style={[styles.btn, { marginTop: 10 }, styles.center]}
        onPress={() => navigation.navigate("Fourth")}
      >
        <Text style={styles.btnText}>Next Project</Text>
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
  modal: {
    position: "relative",
    flex: 1,
    backgroundColor: "#46ce5cff",
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
