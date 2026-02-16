import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "Twelve">;

const Twelve = ({ navigation }: Props) => {
  const textRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(textRef, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [textRef]);
  return (
    <View style={styles.container}>
      <Animated.Text style={{ opacity: textRef }}>გამარჯობა!</Animated.Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Thirteen")}
      >
        <Text style={styles.btnText}>Next step</Text>
      </Pressable>
    </View>
  );
};

export default Twelve;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 30,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontSize: 18,
  },
});
