import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
export type RootStackParamList = {
  First: undefined;
  Second: undefined;
  Third: undefined;
  Fourth: undefined;
  Fifth: undefined;
  Sixth: undefined;
  Seventh: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Fourth" component={Fourth} />
        <Stack.Screen name="Fifth" component={Fifth} />
        <Stack.Screen name="Sixth" component={Sixth} />
        <Stack.Screen name="Seventh" component={Seventh} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
