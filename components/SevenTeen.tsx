import { View, Text, Pressable } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
type Props = NativeStackScreenProps<RootStackParamList, "SevenTeen">;

const SevenTeen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>SevenTeen</Text>

      <Pressable
        className="mt-10 w-[200px] h-[50px] bg-black flex justify-center rounded-xl items-center"
        onPress={() => navigation.navigate("Fifteen")}
      >
        <Text className="text-xl text-white font-extrabold">Next step</Text>
      </Pressable>
    </View>
  );
};

export default SevenTeen;
