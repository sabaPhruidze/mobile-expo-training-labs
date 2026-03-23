import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "RestaurantMenuScreen">;
const RestaurantMenuScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>RestaurantMenuScreen</Text>
    </View>
  );
};

export default RestaurantMenuScreen;
