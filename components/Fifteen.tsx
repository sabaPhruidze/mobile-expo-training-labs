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
    shouldSetBadge: true,
  }),
});

export default function Fifteen({ navigation }: Props) {
  // 2) Permission + Android Channel
  const initLocalNotifications = async () => {
    try {
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
        });
      }
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } =
          await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") {
          Alert.alert("Permission", "Notification permission is not granted");
          return;
        }
      }
    } catch (error) {
      console.log("InitialLocalNotifications error:", error);
      Alert.alert("Error", "Notifications init error");
    }
  };
  useEffect(() => {
    initLocalNotifications();
  }, []);
  //  immediate notification since trigger is null
  const sendLocalNotification = async () => {
    try {
      setTimeout(async () => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Hi 👋",
            body: "This is a local notification have a nice day",
            sound: true,
          },
          trigger: null,
        });
      }, 1000);
    } catch (error) {
      console.log("sendLocalNotification error:", error);
      Alert.alert("Error", "Notification wasn't send");
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-green-500">
      <Text className="text-lg m-5">Local Notification Test</Text>

      <Pressable
        onPress={sendLocalNotification}
        className="w-56 h-14 bg-green-900 items-center justify-center rounded-xl"
      >
        <Text className="text-white text-lg font-bold  ">Ring the bell</Text>
      </Pressable>
      <Pressable
        className="mt-10 w-[200px] h-[50px] bg-black flex justify-center rounded-xl items-center"
        onPress={() => navigation.navigate("Sixteen")}
      >
        <Text className="text-xl text-white font-extrabold">Next step</Text>
      </Pressable>
    </SafeAreaView>
  );
}
