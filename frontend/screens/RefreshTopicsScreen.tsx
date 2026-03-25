import { View, Text, FlatList, RefreshControl, Pressable } from "react-native";
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
    <View className="h-screen bg-slate-950 px-4 pt-6">
      <Text className="text-center text-2xl font-bold text-white">
        Refresh Topics
      </Text>
      <Text className="mt-2 text-center text-slate-300">
        Pull down inside the list to refresh the list
      </Text>
      <View className="mt-6 h-[52%] rounded-3xl border border-white/10 bg-slate-900 px-4 py-4 ">
        <FlatList
          data={refreshTopicsData}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View className="mb-3 rounded-2xl bg-slate-800 px-4 py-4">
              <Text className="text-base font-medium text-white">{item}</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={["#eab308"]}
              tintColor="#eab308"
            />
          }
        />
      </View>
      <Text className="mt-4 text-center font-semibold text-yellow-500">
        Refreshing: {refreshing ? "Yes" : "No"}
      </Text>
      <Text
        onPress={handleRefresh}
        className="mt-4 text-center font-semibold text-yellow-500"
      >
        Test refresh
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Seventh")}
        className="mt-4 h-14 items-center justify-center rounded-2xl bg-[#FACC15]"
      >
        <Text className="text-base font-bold text-[#0B1220] px-4">
          Move to next Project
        </Text>
      </Pressable>
    </View>
  );
};

export default RefreshTopicsScreen;
