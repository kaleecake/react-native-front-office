import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Minputfield from "../mollecules/Minputfield";
import Parameters from "../../styles/param";
// import { numericValues } from "../../@utils/numericValues";
export default function OtypeMail({label}, onChangeText, value){
    return(
        <View style =  {styles.container}>
            <Minputfield 
                label={label}
                placeholder="Enter your e-mail"
                keyboardtype="email-address"
                onChangeText={onChangeText}
                value = {value}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width: Parameters.full_size,
      height: "auto",
      padding: Parameters.param2,
}
});
