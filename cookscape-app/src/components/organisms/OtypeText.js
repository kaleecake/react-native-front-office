import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Minputfield from "../mollecules/Minputfield";
import { numericValues } from "../../@utils/numericValues";
export default function OtypeText({label, placeholder}){
    const [text, setText] = useState("");
    return(
        <View style={styles.numberfield}>
            <Minputfield 
                label={label}
                placeholder={placeholder}
                keyboardtype="numeric"
                onChangeText={(text) => numericValues(text, setNumber)}
                value={number}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    numberfield: {

  }
});