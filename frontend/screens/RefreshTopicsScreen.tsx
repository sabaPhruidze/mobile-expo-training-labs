import { View, Text } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
import { refreshTopicsData } from "../constants/refreshTopicData";
type Props = NativeStackScreenProps<RootStackParamList, "RefreshTopicsScreen">;
const RefreshTopicsScreen = ({ navigation }: Props) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
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
      <Text className="mt-4 text-center font-semibold text-yellow-500">
        Refreshing: {refreshing ? "Yes" : "No"}
      </Text>
      <Text
        onPress={handleRefresh}
        className="mt-4 text-center font-semibold text-yellow-500"
      >
        Test refresh
      </Text>
    </View>
  );
};

export default RefreshTopicsScreen;
