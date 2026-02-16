import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "Thirteen">;

const Thirteen = ({ navigation }: Props) => {
  const [toggle, setToggle] = useState(false);

  const [boxY] = useState(() => new Animated.Value(0));

  useEffect(() => {
    Animated.timing(boxY, {
      toValue: toggle ? 300 : 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [toggle, boxY]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ translateY: boxY }] }]}
      />

      <Pressable
        onPress={() => setToggle((p) => !p)}
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: 10,
            width: 100,
            height: 30,
            paddingTop: 5,
            textAlign: "center",
          }}
        >
          {toggle ? "ასვლა" : "ჩასვლა"}
        </Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Fourteen")}
      >
        <Text style={styles.btnText}>Next step</Text>
      </Pressable>
    </View>
  );
};

export default Thirteen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  box: { width: 100, height: 100, backgroundColor: "red" },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 30,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: { fontSize: 18 },
});
