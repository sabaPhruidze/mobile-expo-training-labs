import { View, Text, FlatList, Image, Pressable, Modal } from "react-native";
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
  const handleCloseModal = () => {
    setSelectedImage("");
  };
  return (
    <View className="h-screen bg-slate-950 px-5 pt-6">
      <View className="mb-6">
        <Text className="text-2xl font-bold text-white">Image Gallery</Text>
        <Text className="mt-2 text-sm text-slate-400">
          Tap an image to open a larger preview
        </Text>
      </View>
      <View className="mt-10 h-50 rounded-3xl bg-slate-900 p-4">
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
      <Modal
        visible={!!selectedImage}
        transparent
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View className="flex-1 bg-black/90 px-5 py-10">
          <Pressable
            onPress={handleCloseModal}
            className="mb-4 self-end rounded-full bg-slate-800 px-4 py-2  mt-5  mr-2"
          >
            <Text
              className="text-white text-sm"
              style={{ transform: [{ scaleX: 1.2 }, { scaleY: 0.8 }] }}
            >
              X
            </Text>
          </Pressable>
          <View className="flex-1 items-center justify-center">
            <Image
              source={{ uri: selectedImage }}
              resizeMode="contain"
              className="h-full w-full"
            />
          </View>
        </View>
      </Modal>
      <View className="mt-5 rounded-3xl bg-slate-900 p-4">
        <Text className="text-lg font-semibold text-white">
          Featured Profiles
        </Text>
        <Text className="mt-2 text-sm leading-6 text-slate-400">
          Browse profile images in a clean horizontal gallery. Tap any profile
          photo to open a larger preview and view it more clearly.
        </Text>

        <View className="mt-4 rounded-2xl bg-slate-800 px-4 py-3">
          <Text className="text-sm text-slate-300">
            Total profiles:{" "}
            <Text className="font-semibold text-white">
              {galleryImages.length}
            </Text>
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Eight")}
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

export default ImageGalleryScreen;
