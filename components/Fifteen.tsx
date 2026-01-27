import { Text, Pressable } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "Fifteen">;

// ✅ ეს უნდა იყოს აქ, კომპონენტის გარეთ (ერთჯერადად)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

const scheduleNotificationAsync = async () => {
  await Notifications.scheduleNotificationAsync({
    content: { title: "Hi", body: "this is a local message" },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
    },
  });
};

const Fifteen = ({ navigation }: Props) => {
  return (
    <SafeAreaView className="flex-1">
      <Text>Fifteen</Text>

      <Pressable
        onPress={scheduleNotificationAsync}
        className="mt-10 w-[200px] h-[50px] bg-green-800 flex justify-center rounded-xl items-center"
      >
        <Text className="text-xl text-white font-extrabold">Ring the bell</Text>
      </Pressable>

      <Pressable
        className="mt-10 w-[200px] h-[50px] bg-black flex justify-center rounded-xl items-center"
        onPress={() => navigation.navigate("Sixteen")}
      >
        <Text className="text-xl text-white font-extrabold">Next step</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Fifteen;
