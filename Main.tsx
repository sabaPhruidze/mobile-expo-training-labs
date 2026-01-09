import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabNavigator, { TabParamList } from "./navigation/TabNavigator";

import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Eight from "./components/Eight";
import Nine from "./components/Nine";
import Ten from "./components/Ten";
import Eleven from "./components/Eleven";
export type RootStackParamList = {
  Second: undefined;
  Third: undefined;
  Fourth: undefined;
  Fifth: undefined;
  Sixth: undefined;
  Eight: undefined;
  Nine: undefined;
  Ten: undefined;
  Eleven: undefined;
  Tabs: NavigatorScreenParams<TabParamList>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      {/* if I want to remove all headers I can add attribute on Stack.Navigator screenOptions={{headerShown:false}} */}
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Fourth" component={Fourth} />
        <Stack.Screen name="Fifth" component={Fifth} />
        <Stack.Screen name="Sixth" component={Sixth} />
        <Stack.Screen name="Eight" component={Eight} />
        <Stack.Screen name="Nine" component={Nine} />
        <Stack.Screen
          name="Ten"
          component={Ten}
          options={{ headerShown: false }} // I removed the header on ten in order to test how it works
        />
        <Stack.Screen
          name="Eleven"
          component={Eleven}
          options={{
            title: "11 test",
            headerStyle: { backgroundColor: "green" }, //background color , which consists statusbar as well
            headerTintColor: "white", //text color
            statusBarStyle: "auto",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
