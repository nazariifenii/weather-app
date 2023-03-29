import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  HomeScreen,
  WeatherCalendarScreen,
  WeatherListScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WeatherCalendarScreen"
        component={WeatherCalendarScreen}
        options={{ title: "Select the date" }}
      />
      <Stack.Screen
        name="WeatherListScreen"
        component={WeatherListScreen}
        options={{ title: "Weather by weeks" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
