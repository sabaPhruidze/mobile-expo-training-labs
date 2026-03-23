import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "RefreshTopicsScreen">;
const RefreshTopicsScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>RefreshTopicsScreen</Text>
    </View>
  );
};

export default RefreshTopicsScreen;
