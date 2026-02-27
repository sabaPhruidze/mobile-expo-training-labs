import {
  View,
  Text,
  Switch,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { TabParamList } from "../navigation/TabNavigator";
import { RootStackParamList } from "../Main";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "SmartBulbScreen">,
  NativeStackScreenProps<RootStackParamList>
>;
const SmartBulbScreen = ({ navigation }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Smart Bulb</Text>
        <Text style={styles.subtitle}>
          {toggle ? "Light is ON" : "Light is OFF"}
        </Text>
        <View
          style={[
            styles.box,
            toggle ? styles.toggleLight : styles.toggleDark,
            toggle ? styles.glowOn : styles.glowOff,
          ]}
        >
          <View style={styles.swithRow}>
            <Text style={styles.label}>{toggle ? "on" : "off"}</Text>
            <Switch
              value={toggle}
              onValueChange={() => setToggle((prev) => !prev)}
              trackColor={{ false: "#090471ff", true: "#002afeff" }}
              thumbColor={"#ffffff"}
            />
          </View>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("Tabs", { screen: "SecretBackDropScreen" })
          }
          style={styles.btn}
        >
          <Text style={styles.btnText}>Next Project</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SmartBulbScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B1220",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    paddingVertical: 26,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    alignItems: "center",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        color: "#FFFFFF",
        shadowOpacity: 0.3,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
      },
      android: { elevation: 10 },
    }),
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  subtitle: {
    marginTop: 5,
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 18,
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
  },
  toggleLight: {
    backgroundColor: "#002AFF",
  },
  toggleDark: {
    backgroundColor: "#090471",
  },
  glowOn: Platform.select({
    ios: {
      shadowColor: "#002AFF",
      shadowOpacity: 0.5,
      shadowRadius: 22,
      shadowOffset: { width: 0, height: 10 },
    },
    android: { elevation: 14 },
  }) as any,
  glowOff: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 8 },
    },
    android: { elevation: 6 },
  }) as any,
  swithRow: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(255,255,255,0.85)",
  },

  btn: {
    marginTop: 18,
    width: "100%",
    height: 46,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
      },
      android: { elevation: 6 },
    }),
  },
  btnPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.92,
  },

  btnText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0B1220",
  },
});
