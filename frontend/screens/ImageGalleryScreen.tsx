import { View, Text, FlatList, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
type Props = NativeStackScreenProps<RootStackParamList, "ImageGalleryScreen">;
import { galleryImages } from "../constants/imageGalleryData";
const ImageGalleryScreen = ({ navigation }: Props) => {
  const [selectedImage, setSelectedImage] = useState("");
  const handleSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
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
            <Pressable
              className="mr-4"
              onPress={() => handleSelectImage(item.imageUrl)}
            >
              <Image
                source={{ uri: item.imageUrl }}
                className="h-40 w-40 rounded-full border-2 border-slate-700"
              />
            </Pressable>
          )}
        />
      </View>
      <Text className="text-slate-400">
        {selectedImage ? "Image selected" : "No image selected yet"}
      </Text>
    </View>
  );
};

export default ImageGalleryScreen;
