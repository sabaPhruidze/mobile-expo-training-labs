import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Eight">;
const Eight = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}>
        <Text>hi its me button</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Nine")}
        style={[styles.btn, styles.center, { marginTop: 20 }]}
      >
        <Text style={styles.text}>Move on next project</Text>
      </Pressable>
    </View>
  );
};

export default Eight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Platform.select({
      ios: "#1100f8ff",
      android: "#077707ff",
      default: "#333",
    }),
  },
  btn: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a30707ff",
    borderRadius: 75,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.3,
    elevation: 10,
    marginTop: Platform.select({
      ios: 0,
      android: StatusBar.currentHeight,
      default: StatusBar.currentHeight,
    }),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffffff",
  },
});
