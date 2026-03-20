import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
export const hobbiesData = [] as const;

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "HobbyListScreen">;
const HobbyListScreen = ({ navigation }: Props) => {
  const renderHeader = () => (
    <View className="mb-4">
      <Text className="text-2xl font-bold text-white">My Hobbies</Text>
      <Text className="mt-2 text-sm text-slate-400">
        Things people enjoy in daily life
      </Text>
    </View>
  );
  const renderEmpty = () => (
    <View className="items-center justify-center py-10">
      <Text className="text-sm text-slate-400">
        The list is currently empty
      </Text>
    </View>
  );
  const renderSeparator = () => <View className="h-2" />;
  return (
    <View className="flex-1 bg-slate-950 px-4 pt-6">
      <FlatList
        data={hobbiesData}
        keyExtractor={(item) => item.id.toString()}
        className="mb-20"
        key="2-columns"
        numColumns={2}
        columnWrapperStyle={{ paddingHorizontal: 1 }}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        renderItem={({ item }) => (
          <View className="rounded-2xl border-slate-800 bg-slate-900 p-4 mr-2">
            <Text className="text-base font-medium text-white">
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default HobbyListScreen;
