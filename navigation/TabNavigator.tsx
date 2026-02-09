import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ProfileCardScreen from "../screens/ProfileCardScreen";
import Second from "../components/Second";
import Third from "../components/Third";
export type TabParamList = {
  ProfileCardScreen: undefined;
  Second: undefined;
  Third: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#000", borderTopColor: "#000" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="ProfileCardScreen"
        component={ProfileCardScreen}
        options={{
          tabBarLabel: "Profile Card",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Second"
        component={Second}
        options={{
          title: "Switch",
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Third"
        component={Third}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="football" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
