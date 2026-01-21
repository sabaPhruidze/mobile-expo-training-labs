import { View, Text, Pressable, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Fourteen">;

const Fourteen = ({ navigation }: Props) => {
  const scaleRef = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleRef, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleRef, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-gray-300">
      <Animated.View style={{ transform: [{ scale: scaleRef }] }}>
        <Ionicons name="heart" size={100} color="red" />
      </Animated.View>

      <Pressable
        className="mt-10 w-[200px] h-[50px] bg-black flex justify-center rounded-xl items-center"
        onPress={() => navigation.navigate("Fifteen")}
      >
        <Text className="text-xl text-white font-extrabold">Next step</Text>
      </Pressable>
    </View>
  );
};

export default Fourteen;
