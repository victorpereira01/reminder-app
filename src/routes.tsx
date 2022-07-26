import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AS" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
