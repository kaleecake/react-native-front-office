import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/Login";
import SignUpScreen from "./src/pages/SignUp";
import Receipt from "./src/pages/Receipt";
import Navigation from "./src/components/templates/Navigation";
import Home from "./src/pages/Home";
import Account from "./src/pages/Account"
import DishDetails from "./src/pages/DishDetails";
import OrderList from "./src/pages/OrderList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth Screens */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* Main App (Bottom Tab Navigator) */}
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="Receipt" component={Receipt} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="DishDetails" component={DishDetails} options={{presentation:"modal"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainApp({ route }) {
  const screens = [
    { name: "Home", component: Home, icon: "home-outline" },
    { name: "OrderList", component: OrderList, icon: "receipt-outline" },
    { name: "Account", component: Account, icon: "person-outline" },
  ];

  return <Navigation screens={screens} />;
}
