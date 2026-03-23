import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
import { refreshTopicsData } from "../constants/refreshTopicData";
type Props = NativeStackScreenProps<RootStackParamList, "RefreshTopicsScreen">;
const RefreshTopicsScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-slate-950 px-4 pt-6">
      <Text className="text-center text-2xl font-bold text-white">
        Refresh Topics
      </Text>
      <Text className="mt-2 text-center text-slate-300">
        Pull down to refresh the list
      </Text>
      <Text className="mt-6 text-center text-slate-400">
        Total Topics:{refreshTopicsData.length}
      </Text>
    </View>
  );
};

export default RefreshTopicsScreen;
