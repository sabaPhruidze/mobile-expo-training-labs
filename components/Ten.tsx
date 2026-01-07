import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Ten">;

const Ten = ({ navigation }: Props) => {
  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const receiveData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();
      const shortList = json.slice(0, 10);
      setTodos(shortList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    receiveData();
  }, []);
  if (isLoading) return <ActivityIndicator size="large" color="green" />;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("Eleven")}
        style={[styles.btn, styles.center, { marginTop: 20 }]}
      >
        <Text style={styles.text}>Move to next project</Text>
      </Pressable>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <Text style={{ textAlign: "center" }}>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default Ten;

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    borderRadius: 60,
    backgroundColor: "#000000ff",
    marginBottom: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffffff",
  },
});
