import { View, Text, Pressable } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
type Props = NativeStackScreenProps<RootStackParamList, "Sixteen">;
const Sixteen = ({ navigation, route }: Props) => {
  const id = route.params?.id;
  return (
    <View className="flex-1 justify-center items-center ">
      <Text className="text-5xl text-center mb-10 text-blue-800 font-extrabold">
        Deep linking (params case)
      </Text>
      <Text className="font-bold text-4xl mb-10 text-blue-800">
        {id ?? "No ID"}
      </Text>
      <Pressable
        className=" w-[200px] h-[50px] bg-black flex justify-center rounded-xl items-center"
        onPress={() => navigation.navigate("SevenTeen")}
      >
        <Text className="text-xl text-white font-extrabold">Next step</Text>
      </Pressable>
    </View>
  );
};

export default Sixteen;
