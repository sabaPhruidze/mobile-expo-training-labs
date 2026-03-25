import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
type Props = NativeStackScreenProps<RootStackParamList, "ImageGalleryScreen">;
import { galleryImages } from "../constants/imageGalleryData";
const ImageGalleryScreen = ({ navigation }: Props) => {
  return (
    <View className="h-screen bg-slate-950 px-5 pt-6">
      <View className="mb-6">
        <Text className="text-2xl font-bold text-white">Image Gallery</Text>
        <Text className="mt-2 text-sm text-slate-400">
          Tap an image to open a larger preview
        </Text>
      </View>
      <View className="mt-32 h-50 rounded-3xl bg-slate-900 p-4">
        <FlatList
          data={galleryImages}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <View className="mr-4">
              <Image
                source={{ uri: item.imageUrl }}
                className="h-40 w-40 rounded-full border-2 border-slate-700"
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ImageGalleryScreen;
