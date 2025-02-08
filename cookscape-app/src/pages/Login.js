import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../components/templates/Form";
import Colors from "../styles/colors";
export default function Login({ navigation }) {
  // Define the fields for the login form
  const loginFields = [

    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },

  ];

  // Handle form submission
  const handleLogin = (formData) => {
    console.log("Login Data:", formData);
    // Here, you can call an API or handle authentication logic
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Login</Text> */}
      <Form fields={loginFields} onSubmit={handleLogin} formTitle= "Log In"  buttonTitle="Log in"/>
      <Text 
        style={styles.link} 
        onPress={() => navigation.navigate("SignUp")}
      >
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    marginTop: 10,
    color: Colors.my_primary_darker
  },
});
