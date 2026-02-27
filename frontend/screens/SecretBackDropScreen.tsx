import {
  Modal,
  Text,
  ImageBackground,
  StyleSheet,
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

const SecretBackDropScreen = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleOn = () => setToggle(true);
  const toggleOff = () => setToggle(false);
  return (
    <View>
      <Text>fewf</Text>
    </View>
  );
};

export default SecretBackDropScreen;
