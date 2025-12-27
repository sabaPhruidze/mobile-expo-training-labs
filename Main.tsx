import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./components/First";
const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
