import { View, Text, Switch, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Second">;
const Second = ({ navigation }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.box, toggle ? styles.toggleLight : styles.toggleDark]}
      />
      <Switch
        value={toggle}
        onValueChange={() => setToggle((prev) => !prev)}
        trackColor={{ false: "#090471ff", true: "#002afeff" }}
        thumbColor={"#ffffff"}
      />
      <Pressable
        onPress={() => navigation.navigate("Third")}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Next Project</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
  },
  toggleLight: {
    backgroundColor: "#002afeff",
  },
  toggleDark: {
    backgroundColor: "#090471ff",
  },
  btn: {
    width: 130,
    height: 40,
    backgroundColor: "#002afeff",
    borderRadius: 30,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    color: "#ffffffff",
  },
});
