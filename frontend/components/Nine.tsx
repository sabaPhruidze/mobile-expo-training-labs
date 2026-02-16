import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Nine">;
const Nine = ({ navigation }: Props) => {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.circle}></View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Ten")}
        style={[styles.btn, styles.center, { marginTop: 20 }]}
      >
        <Text style={styles.text}>Move on next project</Text>
      </Pressable>
    </View>
  );
};

export default Nine;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#998f8fff",
    position: "relative",
    marginTop: 50,
    zIndex: 1,
  },
  circle: {
    width: 15,
    height: 15,
    position: "absolute",
    backgroundColor: "red",
    borderRadius: 7.5,
    top: -5,
    right: -5,
    zIndex: 2,
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 60,
    backgroundColor: "#000000ff",
    marginBottom: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffffff",
  },
});
