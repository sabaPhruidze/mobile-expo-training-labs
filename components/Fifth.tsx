import { View, Text, SectionList, StyleSheet, Pressable } from "react-native";
import React from "react";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Fifth">;

const section = [
  // გადასაცემი ინფორმაცია უნდა იყოს array. 1. title :string 2. data: array
  {
    title: "სასმელები",
    data: ["ნატახტარი", "ზანდუკელი", "ჩერო"],
  },
  {
    title: "მთავარი კერძები",
    data: ["მწვადი", "ხაშაპური", "ლობიანი", "გუბთა"],
  },
  {
    title: "დესერტები",
    data: ["ტორტი", "ნამცხვარი", "პეჩენიები"],
  },
];

const Fifth = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onPress={() => navigation.navigate("Sixth")}
        style={[styles.btn, styles.center, { marginTop: 20 }]}
      >
        <Text style={styles.text}>Move on next project</Text>
      </Pressable>
      <SectionList
        sections={section}
        keyExtractor={(item) => item}
        renderItem={(
          { item } // ავტომატურად data ენიჭება აქ
        ) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={{ marginVertical: 20, fontWeight: 600, fontSize: 20 }}>
            {section.title}
          </Text>
        )}
      />
    </View>
  );
};

export default Fifth;
const styles = StyleSheet.create({
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
