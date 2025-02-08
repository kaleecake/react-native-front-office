// import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Minputfield from "../mollecules/Minputfield";
import Parameters from "../../styles/param";
export default function OtypeText({label, placeholder, onChangeText, value}){
    // const [text, setText] = useState("");
    return(
        <View styles = {styles.container}>
            <Minputfield 
                label={label}
                placeholder={placeholder}

                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width: Parameters.full_size,
      height: "auto",
      padding: Parameters.param2
    }
})