import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";

const HiddenImage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle((prev) => !prev);
  return (
    <View>
      <ImageBackground
        source={require("../assets/nature.png")}
        style={{ width: 100, height: 100 }}
      >
        <Pressable onPress={handleToggle}>
          <Text>ნახე დეტალები</Text>
        </Pressable>
      </ImageBackground>
      <Modal animationType="slide" visible={toggle}>
        <Text>ეს არის საიდუმლო ინფორმაცია</Text>
        <Button title="დახურვა" onPress={handleToggle} />
      </Modal>
    </View>
  );
};

export default HiddenImage;
