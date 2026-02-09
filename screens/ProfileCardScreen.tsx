import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { TabParamList } from "../navigation/TabNavigator";
import { RootStackParamList } from "../Main";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "ProfileCardScreen">,
  NativeStackScreenProps<RootStackParamList>
>;

const ProfileCardScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/ac/10/6d/ac106d0c9bb817e54df3409615832313.jpg",
          }}
          accessibilityLabel="User Avatar"
          style={styles.icon}
        />
        <Text style={styles.name}>Saba Phruidze</Text>
        <Text style={styles.position}>React Native Developer</Text>
        <Pressable
          style={styles.btn}
          onPress={() =>
            navigation.navigate("Tabs", { screen: "SmartBulbScreen" })
          }
        >
          <Text style={styles.btnText}>Next step</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileCardScreen;

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
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 18,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  icon: {
    width: 200,
    height: 150,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.35)",
    marginBottom: 14,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
      },
      android: {
        elevation: 6,
      },
    }),
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 5,
    color: "#FFFFFF",
  },
  position: {
    marginTop: 5,
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
  },
  btn: {
    marginTop: 18,
    width: "100%",
    height: 46,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0B1220",
  },
  btnPressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.9,
  },
});
