import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
export const hobbiesData = [
  { id: 1, title: "Programming" },
  { id: 2, title: "Working out" },
  { id: 3, title: "Reading books" },
  { id: 4, title: "Photography" },
  { id: 5, title: "Traveling" },
  { id: 6, title: "Listening to music" },
  { id: 7, title: "Drawing" },
  { id: 8, title: "Cooking" },
  { id: 9, title: "Learning languages" },
  { id: 10, title: "Chess" },
  { id: 11, title: "Watching movies" },
  { id: 12, title: "Gaming" },
] as const;

type Props = NativeStackScreenProps<RootStackParamList, "Fourth">;

const Fourth = ({ navigation }: Props) => {
  return (
    <View>
      <FlatList
        data={hobbiesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.text}>{item.title} </Text>
          </View>
        )}
      />
      <View style={styles.center}>
        <Pressable
          onPress={() => navigation.navigate("Fifth")}
          style={[styles.btn, styles.center, { marginTop: 20 }]}
        >
          <Text style={styles.text}>Move on next project</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Fourth;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: "#b10a0aff",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffffff",
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 60,
    backgroundColor: "#000000ff",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
