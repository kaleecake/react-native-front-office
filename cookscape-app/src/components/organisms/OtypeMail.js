import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Minputfield from "../mollecules/Minputfield";
// import { numericValues } from "../../@utils/numericValues";
export default function OtypeMail({label}){
    return(
        <View>
            <Minputfield 
                label={label}
                placeholder="Enter your e-mail"
                keyboardtype="email-address"
            />
        </View>
    )
}
