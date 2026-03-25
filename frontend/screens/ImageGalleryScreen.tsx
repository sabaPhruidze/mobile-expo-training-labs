import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
type Props = NativeStackScreenProps<RootStackParamList, "ImageGalleryScreen">;
const ImageGalleryScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>ImageGalleryScreen</Text>
    </View>
  );
};

export default ImageGalleryScreen;
