import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { TabParamList } from "../navigation/TabNavigator";
import { RootStackParamList } from "../Main";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "First">,
  NativeStackScreenProps<RootStackParamList>
>;

const First = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
        }}
        alt="It is an user icon with white and blue colors.In the center is a person's icon in white colors, outside it has blue and than white circle"
        style={styles.icon}
      />
      <Text style={styles.name}>Saba Phruidze</Text>
      <Text style={styles.position}>React Native Developer</Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Tabs", { screen: "Second" })}
      >
        <Text style={styles.btnText}>Next step</Text>
      </Pressable>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a0903eff",
  },
  icon: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    marginTop: 15,
    color: "rgba(255, 255, 255, 1)",
  },
  position: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 30,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
  },
});
