import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Seventh">;

interface Data {
  id: string;
  content: string;
}

const Seventh = ({ navigation }: Props) => {
  const DATA: Data[] = [
    {
      id: "1",
      content:
        "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: "2",
      content:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    },
    {
      id: "3",
      content:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
    },
    {
      id: "4",
      content:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      id: "5",
      content:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item: Data) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.content }} style={styles.image} />
          </View>
        )}
        horizontal
      />
    </View>
  );
};

export default Seventh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#ffffffff",
  },
});
