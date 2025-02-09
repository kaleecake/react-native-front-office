import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/Login";
import SignUpScreen from "./src/pages/SignUp";
import Home from "./src/pages/Home";
import Receipt from "./src/pages/Receipt";
// import { Text } from "react-native-gesture-handler";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Receipt" component={Receipt} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
