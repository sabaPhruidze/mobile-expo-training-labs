import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
export type TabParamList = {
  First: undefined;
  Second: undefined;
  Third: undefined;
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
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Second"
        component={Second}
        options={{
          title: "switch",
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          tabBarLabel: "Switch",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="basketball" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Third"
        component={Third}
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
