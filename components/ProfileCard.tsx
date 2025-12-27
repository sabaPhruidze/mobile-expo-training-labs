import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const ProfileCard = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/6522/6522516.png",
        }}
        alt="icon of profile"
        style={styles.profileImage}
      />
      <Text style={styles.text}>SABA PHRUIDZE</Text>
      <Text>React Native Developer</Text>
      <Pressable style={styles.btn}>
        <Text style={{ color: "#c3bebeff", marginBottom: 10 }}>Follow</Text>
      </Pressable>
    </View>
  );
};

export default ProfileCard;
const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 100,
    height: 30,
    backgroundColor: "#61bd04ff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
});
