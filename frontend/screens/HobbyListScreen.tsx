import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
export const hobbiesData = [
  { id: 1, title: "Programming" },
  { id: 2, title: "Working out" },
  { id: 3, title: "Reading books" },
  { id: 4, title: "Photography" },
  { id: 5, title: "Traveling" },
  { id: 6, title: "Listening to music" },
  { id: 7, title: "Drawing" },
  { id: 8, title: "Cooking" },
  { id: 9, title: "Learning languages" },
  { id: 10, title: "Chess" },
  { id: 11, title: "Watching movies" },
  { id: 12, title: "Gaming" },
  { id: 13, title: "reading" },
] as const;

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "HobbyListScreen">;
const HobbyListScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-slate-950 px-4 pt-6">
      <FlatList
        data={hobbiesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="mb-3 rounded-2xl border-slate-800 bg-slate-900 p-4">
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
