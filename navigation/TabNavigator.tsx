import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import First from "../components/First";
import Seventh from "../components/Seventh";
import Twelve from "../components/Twelve";

export type TabParamList = {
  First: undefined;
  Seventh: undefined;
  Twelve: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="First"
        component={First}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Seventh"
        component={Seventh}
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Twelve"
        component={Twelve}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
