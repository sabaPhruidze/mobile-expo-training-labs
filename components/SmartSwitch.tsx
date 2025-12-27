import { View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";
import React from "react";

const SmartSwitch = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.wre,
          { backgroundColor: toggle ? "#fffefeff" : "#9a9494ff" },
        ]}
      ></View>
      <Switch
        onChange={handleToggle}
        trackColor={{ false: "bold", true: "#026efd" }}
        thumbColor={toggle ? "#fffefeff" : "#9a9494ff"}
      />
      <Text>{toggle ? "Light Mode" : "Dark Mode"}</Text>
    </View>
  );
};

export default SmartSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0a2a2ff",
    alignItems: "center",
    justifyContent: "center",
  },
  wre: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
