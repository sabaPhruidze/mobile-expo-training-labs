import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
import { Ionicons } from "@expo/vector-icons";
type Props = NativeStackScreenProps<RootStackParamList, "Fourteen">;

const Fourteen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Ionicons name="heart" size={100} color="yellow" />
      <Pressable
        className="w-60 h-[50px] bg-white rounded-lg mt-4 items-center justify-center"
        onPress={() => navigation.navigate("Fifteen")}
      >
        <Text style={styles.btnText}>Next step</Text>
      </Pressable>
    </View>
  );
};

export default Fourteen;

const styles = StyleSheet.create({
  btnText: {
    fontSize: 18,
  },
});
