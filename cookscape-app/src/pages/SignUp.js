import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../components/templates/Form";

export default function SignUpScreen() {
  const signUpFields = [
    { name: "name", label: "Full Name", type: "text" , placeholder: "full name"},
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone Number", type: "number", placeholder: "phone nummber" },
    { name: "password", label: "Password", type: "password", placeholder:"your password"},
  ];

  const handleSignUp = (formData) => {
    console.log("Sign Up Data:", formData);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Sign Up</Text> */}
      <Form fields={signUpFields} onSubmit={handleSignUp} buttonTitle="Sign Up" formTitle="Registration"/>
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
});
