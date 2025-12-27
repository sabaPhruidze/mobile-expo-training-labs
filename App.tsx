import { View, StyleSheet } from "react-native";
import ProfileCard from "./components/ProfileCard";
import SmartSwitch from "./components/SmartSwitch";
import HiddenImage from "./components/HiddenImage";

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0a2a2ff",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
  },
});
