import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useState } from "react";
export const hobbiesData: { id: number; title: string }[] = [
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
];

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "HobbyListScreen">;
const HobbyListScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([...hobbiesData]);
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
  const handleLoadMore = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newItems = [
        { id: Date.now() + 1, title: "Boxing" },
        { id: Date.now() + 2, title: "Running" },
        { id: Date.now() + 3, title: "Swimming" },
        { id: Date.now() + 4, title: "Writing" },
      ];
      setData((prev) => [...prev, ...newItems]);
      setLoading(false);
    }, 1200);
  };
  const renderFooter = () =>
    loading ? (
      <View className="py-4">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    ) : null;

  const renderSeparator = () => <View className="h-2" />;
  return (
    <View className="flex-1 bg-slate-950 px-4 pt-6">
      <View className="h-[360px]">
        <FlatList
          key="2-columns"
          data={data}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={renderHeader}
          numColumns={2}
          columnWrapperStyle={{ paddingHorizontal: 2 }}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={renderEmpty}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore} //infinite load more
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <View className="mb-3 w-1/2 px-1.5">
              <View className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <Text className="text-base font-medium text-white">
                  {item.title}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View className="pb-4 pt-3">
        <Pressable
          onPress={() => navigation.navigate("RestaurantMenuScreen")}
          className="mt-3 w-full h-12 rounded-2xl border border-white/30 bg-white/10 items-center justify-center"
        >
          <Text className="text-white text-base font-semibold">
            Next Project
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HobbyListScreen;
