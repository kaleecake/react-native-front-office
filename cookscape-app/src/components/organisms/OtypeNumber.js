import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Minputfield from "../mollecules/Minputfield";
import { numericValues } from "../../@utils/numericValues";
export default function OtypeNumber({label, placeholder}){
    const [number, setNumber] = useState("");
    return(
        <View>
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
