import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import OtypeText from "../organisms/OtypeText";
import OtypeNumber from "../organisms/OtypeNumber";
import OtypeMail from "../organisms/OtypeMail";
// import Parameters from "../../styles/param";
import Hierachy from "../../styles/hierachy";
import Abutton from "../atoms/Abutton"
import OtypePassword from "../organisms/OtypePassword";
export default function Form({ fields, onSubmit, formTitle, buttonTitle }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <View style={styles.container}>
        <Text style= {styles.title}>{formTitle}</Text>
      {fields.map((field) => {
        switch (field.type) {
          case "text":
            return (
              <OtypeText
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                onChangeText={(value) => handleInputChange(field.name, value)}
              />
            );
          case "number":
            return (
              <OtypeNumber
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                onChangeText={(value) => handleInputChange(field.name, value)}
              />
            );
          case "email":
            return (
              <OtypeMail
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                onChangeText={(value) => handleInputChange(field.name, value)}
              />
            );
          case "password":
            return (
              <OtypePassword
                key={field.name}
                label ={field.label}
                placeholder={field.placeholder}
                onChangeText={(value)=> handleInputChange(field.name, value)}
              /> 
            )
          default:
            return null;
        }
      })}
      <Abutton title={buttonTitle} onPress={() => onSubmit(formData)} />
      {/* <Button title="Submit" onPress={() => onSubmit(formData)} /> */}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: "auto",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20

  },
  title: {
    fontSize: Hierachy.title,
    fontWeight: "bold",
    marginBottom: 20,
  }
});
