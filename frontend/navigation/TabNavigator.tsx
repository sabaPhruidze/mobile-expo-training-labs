import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ProfileCardScreen from "../screens/ProfileCardScreen";
import SmartBulbScreen from "../screens/SmartBulbScreen";
import SecretBackDropScreen from "../screens/SecretBackDropScreen";
export type TabParamList = {
  ProfileCardScreen: undefined;
  SmartBulbScreen: undefined;
  SecretBackDropScreen: undefined;
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
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SmartBulbScreen"
        component={SmartBulbScreen}
        options={{
          title: "Smart bulb",
          headerStyle: { backgroundColor: "#1F2A44" },
          tabBarLabel: "Smart bulb",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bulb" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SecretBackDropScreen"
        component={SecretBackDropScreen}
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
