import React, { useEffect } from "react";
import { Alert, Platform, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "Fifteen">;

// ✅ YOUR SDK TYPE expects shouldShowBanner + shouldShowList
Notifications.setNotificationHandler({
  handleNotification:
    async (): Promise<Notifications.NotificationBehavior> => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
});

export default function Fifteen({ navigation }: Props) {
  const initLocalNotifications = async (): Promise<boolean> => {
    try {
      // Android channel (required for sound/importance)
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          sound: "default",
        });
      }

      // Permissions
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } =
          await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") {
          Alert.alert("Permission", "Notification permission is not granted");
          return false;
        }
      }

      return true;
    } catch (e) {
      console.log("initLocalNotifications error:", e);
      Alert.alert("Error", "Notifications init error");
      return false;
    }
  };

  const scheduleDaily1035 = async () => {
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();

      const trigger: Notifications.DailyTriggerInput = {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 10,
        minute: 50,
      };

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Reminder",
          body: "It is 10:50",
          sound: "default",
        },
        trigger,
      });

      // optional debug
      const all = await Notifications.getAllScheduledNotificationsAsync();
      console.log("Scheduled:", all);
    } catch (e) {
      console.log("scheduleDaily1035 error:", e);
      Alert.alert("Error", "scheduleDaily1035 failed");
    }
  };

  useEffect(() => {
    const run = async () => {
      const ok = await initLocalNotifications();
      if (!ok) return;

      await scheduleDaily1035();
    };

    run();
  }, []);

  const sendLocalNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hi",
          body: "Just reminding you to have a nice day",
          sound: "default",
        },
        trigger: null,
      });
    } catch (error) {
      console.log("sendLocalNotification error:", error);
      Alert.alert("Error", "Notification wasn't sent");
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-green-500">
      <Text className="text-lg m-5">Local Notification Test</Text>

      <Pressable
        onPress={sendLocalNotification}
        className="w-56 h-14 bg-green-900 items-center justify-center rounded-xl"
      >
        <Text className="text-white text-lg font-bold">Ring the bell</Text>
      </Pressable>

      <Pressable
        className="mt-10 w-[200px] h-[50px] bg-black flex justify-center rounded-xl items-center"
        onPress={() => navigation.navigate("Sixteen", { id: "50" })}
      >
        <Text className="text-xl text-white font-extrabold">Next step</Text>
      </Pressable>
    </SafeAreaView>
  );
}
