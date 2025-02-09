import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Aimage from "../atoms/Aimage"; 
import Parameters from "../../styles/param";
import Colors from "../../styles/colors"
export default function MbigButton({
  image,  
  title,
  description,
  price,
  onPress,
  width,
  height 
}) {
  
  return (
    <View style={[styles.touchableOpacity]}>
      <TouchableOpacity onPress={onPress}>
        <Aimage {...image}/>  
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    // width: "50%",
    // justifyContent: "center",
    // alignItems: "center",
    padding: Parameters.param1,
    backgroundColor: "#f0f0f0", 
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    marginTop: 4,
    fontWeight: "bold",
    fontSize: 16,
    // width: "50%"

  },
  description: {
    fontSize: 14,
    color: Colors.grayed_item,
    // width: "50%"
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.my_primary,
    textAlign: "right"
  },
});
