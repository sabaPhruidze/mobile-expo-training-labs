import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabNavigator, { TabParamList } from "./navigation/TabNavigator";

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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      {/* if I want to remove all headers I can add attribute on Stack.Navigator screenOptions={{headerShown:false}} */}
      <Stack.Navigator initialRouteName="Tabs">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
