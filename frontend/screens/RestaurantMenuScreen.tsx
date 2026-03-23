import { View, Text, SectionList, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "RestaurantMenuScreen">;
type MenuSection = {
  title: string;
  data: string[];
};
const menuSections: MenuSection[] = [
  {
    title: "Drinks",
    data: [
      "Mineral Water",
      "Sparkling Water",
      "Orange Juice",
      "Apple Juice",
      "Lemonade",
      "Iced Tea",
      "Coffee",
      "Cappuccino",
      "Black Tea",
      "Green Tea",
    ],
  },
  {
    title: "Main Courses",
    data: [
      "Grilled Meat",
      "Cheese Pie",
      "Bean Pie",
      "Meat Dumplings",
      "Chicken Barbecue",
      "Beef Steak",
      "Fried Chicken",
      "Mushroom Pasta",
      "Vegetable Rice",
      "Grilled Salmon",
    ],
  },
  {
    title: "Side Dishes",
    data: [
      "French Fries",
      "Mashed Potatoes",
      "Grilled Vegetables",
      "Rice",
      "Onion Rings",
      "Cheese Balls",
      "Garlic Bread",
    ],
  },
  {
    title: "Salads",
    data: [
      "Caesar Salad",
      "Greek Salad",
      "Chicken Salad",
      "Tuna Salad",
      "Fresh Garden Salad",
      "Cucumber and Tomato Salad",
    ],
  },
  {
    title: "Desserts",
    data: [
      "Chocolate Cake",
      "Cheesecake",
      "Ice Cream",
      "Brownie",
      "Cookies",
      "Fruit Salad",
      "Pancakes",
      "Honey Cake",
    ],
  },
];
const RestaurantMenuScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-[#0B1220] items-center justify-start px-4 pt-10">
      <View className="h-[80%] w-full max-w-[360px] rounded-3xl border border-white/20 bg-white/10 p-5">
        <Text className="text-white text-2xl font-bold text-center">
          RestaurantMenuScreen
        </Text>
        <Text className="mt-2 text-center text-white/70">category of menu</Text>
        <SectionList
          sections={menuSections}
          className="m-6"
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text className="mb-2 text-base text-white/90">{item}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text className="mb-3 mt-5 text-xl font-bold text-[#FACC15]">
              {section.title}
            </Text>
          )}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Sixth")}
        className="mt-4 h-14 items-center justify-center rounded-2xl bg-[#FACC15]"
      >
        <Text className="text-base font-bold text-[#0B1220] px-4">
          Move to next Project
        </Text>
      </Pressable>
    </View>
  );
};

export default RestaurantMenuScreen;
