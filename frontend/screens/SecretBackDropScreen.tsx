import {
  Modal,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Image,
  View,
} from "react-native";
import React, { useState } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { TabParamList } from "../navigation/TabNavigator";
import { RootStackParamList } from "../Main";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "SecretBackDropScreen">,
  NativeStackScreenProps<RootStackParamList>
>;

const SecretBackDropScreen = ({ navigation }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <ImageBackground
      source={require("../assets/nature.png")}
      resizeMode="cover"
      className="flex-1"
    >
      {/* dark overlay */}
      <View className="flex-1 bg-slate-950/70 items-center justify-center px-4">
        {/* glass card */}
        <View className="w-80 rounded-3xl border border-white/20 bg-white/10 px-5 py-7 items-center">
          <Text className="text-white text-xl font-bold">
            Secret information
          </Text>
          {/* main action */}
          <Pressable
            onPress={openModal}
            className="mt-5 w-full h-12 rounded-2xl bg-white items-center justify-center"
          >
            <Text className="text-slate-950 font-bold ">See details</Text>
          </Pressable>
          {/* navigation action */}
          <Pressable
            onPress={() => navigation.navigate("Fourth")}
            className="mt-3 w-full h-12 rounded-2xl border border-white/30 bg-white/10 items-center justify-center"
          >
            <Text className="text-white text-base font-semibold">
              Next Project
            </Text>
          </Pressable>
        </View>
        {/* modal */}
        <Modal visible={isOpen} animationType="fade" transparent>
          <View className="flex-1 bg-black/70 items-center justify-center px-4">
            <View className="w-80 rounded-3xl border border-white/20 bg-slate-950 px-5 py-6">
              {/* Close icon button */}
              <TouchableOpacity
                onPress={closeModal}
                className="absolute right-3 top-3 w-10 h-10 rounded-full bg-white/10 items-center justify-center"
              >
                <Image
                  source={require("../assets/exit.png")}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text className="text-white text-lg font-bold pr-10">
                This is secret information
              </Text>
              <Text className="text-white/80 text-sm mt-5 mb-2">
                Congrats. You're now officially "in the know"
              </Text>
              <Pressable
                onPress={closeModal}
                className="mt-5 w-full h-12 rounded-2xl bg-white items-center justify-center"
              >
                <Text className="text-slate-950 text-base font-bold">
                  Close
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default SecretBackDropScreen;
