import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../styles/colors";
const Tab = createBottomTabNavigator();

export default function Navigation({ screens }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const screen = screens.find((screen) => screen.name === route.name);
          return screen ? <Icon name={screen.icon} size={size} color={color} /> : null;
        },
        tabBarActiveTintColor: Colors.my_primary ,
        tabBarInactiveTintColor: Colors.my_grey,
        tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5, height: 60 },
      })}
    >
      {screens.map(({ name, component, icon }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
}
