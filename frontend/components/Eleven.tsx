import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Eleven">;

const Eleven = ({ navigation }: Props) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Twelve")}
        style={[styles.btn, styles.center, { marginTop: 20 }]}
      >
        <Text style={styles.text}>next project</Text>
      </Pressable>
    </View>
  );
};

export default Eleven;

const styles = StyleSheet.create({
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
