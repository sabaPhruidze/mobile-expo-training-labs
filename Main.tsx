import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabNavigator, { TabParamList } from "./navigation/TabNavigator";

import * as Linking from "expo-linking";

import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Eight from "./components/Eight";
import Nine from "./components/Nine";
import Ten from "./components/Ten";
import Eleven from "./components/Eleven";
import Twelve from "./components/Twelve";
import Thirteen from "./components/Thirteen";
import Fourteen from "./components/Fourteen";
import Fifteen from "./components/Fifteen";
import Sixteen from "./components/Sixteen";
import SevenTeen from "./components/SevenTeen";
export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  Fourth: undefined;
  Fifth: undefined;
  Sixth: undefined;
  Seventh: undefined;
  Eight: undefined;
  Nine: undefined;
  Ten: undefined;
  Eleven: undefined;
  Twelve: undefined;
  Thirteen: undefined;
  Fourteen: undefined;
  Fifteen: undefined;
  Sixteen: undefined;
  SevenTeen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const linking = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Fifth: "fifth",
      Sixteen: "user/:id",
    },
  },
};

const Main = () => {
  return (
    <NavigationContainer linking={linking}>
      {/* if I want to remove all headers I can add attribute on Stack.Navigator screenOptions={{headerShown:false}} */}
      <Stack.Navigator initialRouteName="Sixteen">
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Fourth" component={Fourth} />
        <Stack.Screen name="Fifth" component={Fifth} />
        <Stack.Screen name="Sixth" component={Sixth} />
        <Stack.Screen name="Seventh" component={Seventh} />
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
        <Stack.Screen name="Twelve" component={Twelve} />
        <Stack.Screen name="Thirteen" component={Thirteen} />
        <Stack.Screen name="Fourteen" component={Fourteen} />
        <Stack.Screen name="Fifteen" component={Fifteen} />
        <Stack.Screen name="Sixteen" component={Sixteen} />
        <Stack.Screen name="SevenTeen" component={SevenTeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
