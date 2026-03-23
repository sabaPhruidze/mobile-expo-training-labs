import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "RestaurantMenuScreen">;
const RestaurantMenuScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-[#0B1220] items-center justify-center px-4">
      <View className="w-full max-w-[360px] rounded-3xl border border-white/20 bg-white/10 p-5">
        <Text className="text-white text-2xl font-bold text-center">
          RestaurantMenuScreen
        </Text>
        <Text className="mt-2 text-center text-white/70">category of menu</Text>
      </View>
    </View>
  );
};

export default RestaurantMenuScreen;
