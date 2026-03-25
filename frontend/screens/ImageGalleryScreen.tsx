import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
type Props = NativeStackScreenProps<RootStackParamList, "ImageGalleryScreen">;
const ImageGalleryScreen = ({ navigation }: Props) => {
  return (
    <View className="h-screen bg-slate-950 px-5 pt-6">
      <View className="mb-6">
        <Text className="text-2xl font-bold text-white">Image Gallery</Text>
        <Text className="mt-2 text-sm text-slate-400">
          Tap an image to open a larger preview
        </Text>
      </View>
      <View className="h-[60%] rounded-3xl bg-slate-900 p-4">
        <Text className="text-base font-semibold text-white">
          Gallery content will go here
        </Text>
      </View>
    </View>
  );
};

export default ImageGalleryScreen;
