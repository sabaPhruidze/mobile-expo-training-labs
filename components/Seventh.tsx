import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
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
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
    },
  ];
  const DATAList: Data[] = [
    {
      id: "6",
      content: "Hardship",
    },
    {
      id: "7",
      content: "Strength",
    },
    {
      id: "8",
      content: "Resolve",
    },
    {
      id: "9",
      content: "Strong",
    },
    {
      id: "10",
      content: "Wordly",
    },
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [currImage, setCurrentImage] = useState<string>("");
  const handleButton = (imgUrl: string) => {
    setOpen(true);
    setCurrentImage(imgUrl);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item: Data) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => handleButton(item.content)}
          >
            <Image source={{ uri: item.content }} style={styles.image} />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Pressable
        onPress={() => navigation.navigate("Eight")}
        style={[styles.btn, styles.center, { marginTop: 20 }]}
      >
        <Text style={styles.text}>Move on next project</Text>
      </Pressable>
      <FlatList
        data={DATAList}
        keyExtractor={(item: Data) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.content}</Text>
          </View>
        )}
      />
      <Modal
        animationType="slide"
        visible={open}
        onRequestClose={() => setOpen(false)}
      >
        <Image source={{ uri: currImage }} style={styles.modalImage} />
      </Modal>
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
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#ffffffff",
  },
  modalImage: {
    flex: 1,
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
  text: {
    color: "#ffffffff",
  },
});
