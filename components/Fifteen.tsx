import React, { useEffect } from "react";
import { Alert, Platform, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
type Props = NativeStackScreenProps<RootStackParamList, "Fifteen">;
// 1) Handler — notification in foreground to appeal
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Fifteen({ navigation }: Props) {
  // 2) Permission + Android Channel
  async function initLocalNotifications() {
    try {
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
        });
      }

      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const req = await Notifications.requestPermissionsAsync();
        if (req.status !== "granted") {
          Alert.alert("Permission", "Notification permission is not granted");
          return;
        }
      }
    } catch (e) {
      console.log("initLocalNotifications error:", e);
      Alert.alert("Error", "Notifications init error");
    }
  }
  useEffect(() => {
    initLocalNotifications();
  }, []);
  // immediate notification since trigger is null
  // async function sendLocalNotification() {
  //   try {
  //     await Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: "Hi 👋",
  //         body: "This is a local notification have a nice day",
  //         sound: true,
  //       },
  //       trigger: null, // immediatelly
  //     });
  //   } catch (e) {
  //     console.log("sendLocalNotification error:", e);
  //     Alert.alert("Error", "Notification ვერ გაიგზავნა");
  //   }
  // }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-green-500">
      <Text className="text-lg m-5">Local Notification Test</Text>

      {/* <Pressable
        onPress={sendLocalNotification}
        className="w-56 h-14 bg-green-800 items-center justify-center rounded-xl"
      >
        <Text className="text-white text-lg font-bold  ">Ring the bell</Text>
      </Pressable> */}
      <Pressable
        className="mt-10 w-[200px] h-[50px] bg-black flex justify-center rounded-xl items-center"
        onPress={() => navigation.navigate("Sixteen")}
      >
        <Text className="text-xl text-white font-extrabold">Next step</Text>
      </Pressable>
    </SafeAreaView>
  );
}
