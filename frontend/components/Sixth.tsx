import {
  View,
  Text,
  RefreshControl,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Sixth">;

const Sixth = ({ navigation }: Props) => {
  const DATA = [
    "ახალი ამბები",
    "ცნობილი საკვები",
    "ახალი ტანსაცმლის ბრენდები",
    "პოლიტიკური მოვლენები",
    "ისტორიული ამბები",
  ];
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.mainItem}>
            <Text style={styles.mainItemText}>{item}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={["green"]}
          />
        }
      />
      <Pressable
        onPress={() => navigation.navigate("Seventh")}
        style={[styles.btn, styles.center, { marginTop: 20 }]}
      >
        <Text style={styles.text}>Move on next project</Text>
      </Pressable>
      <Text>ჩამოწიე, async - refreshControl</Text>
    </View>
  );
};

export default Sixth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 150,
  },
  mainItem: {
    marginTop: 20,
  },
  mainItemText: {
    fontSize: 20,
  },
  text: {
    color: "#ffffffff",
  },
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
});
