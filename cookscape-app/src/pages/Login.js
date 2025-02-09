import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Form from "../components/templates/Form";
import Colors from "../styles/colors";

export default function Login({ navigation }) {
  const loginFields = [
    { name: "email", label: "Email", type: "email", placeholder: "Your email" },
    { name: "password", label: "Password", type: "password", placeholder: "Your password" },
  ];

  useEffect(() => {
    const checkUserSession = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        navigation.replace("MainApp", { userData: JSON.parse(userData) });
      }
    };
    checkUserSession();
  }, []);

  const handleLogin = async (formData) => {
    if (!formData.email || !formData.password) {
        Alert.alert("Error", "Please fill in all fields.");
        return;
    }

    if (formData.email === "test@example.com" && formData.password === "1234") {
        await AsyncStorage.setItem("userData", JSON.stringify(formData));
        navigation.replace("MainApp"); 
    } else {
        Alert.alert("Error", "Invalid email or password");
    }
};



  return (
    <View style={styles.container}>
      <Form fields={loginFields} onSubmit={handleLogin} formTitle="Log in to Cookscape" buttonTitle="Log in" />
      <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  link: {
    marginTop: 10,
    color: Colors.my_primary_darker,
  },
});

