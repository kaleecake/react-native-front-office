import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Aimage from "../components/atoms/Aimage";
import Abutton from "../components/atoms/Abutton";
import Colors from "../styles/colors";

export default function Receipt({ route, navigation }) {
    const { dishDetails, quantity } = route.params; 
    const price = parseFloat(dishDetails.price.replace("K Ar", "").replace(" ", "")); 
    const totalPrice = price * quantity; 

    return (
        <View style={styles.container}>
            <Aimage source={dishDetails.image.source} style={styles.image} />
            <Text style={styles.title}>Receipt</Text>
            <Text style={styles.label}>Dish: {dishDetails.title}</Text>
            <Text style={styles.label}>Description: {dishDetails.description}</Text>
            <Text style={styles.label}>Price: {dishDetails.price}</Text>
            <Text style={styles.label}>Quantity: {quantity}</Text>
            <Text style={styles.label}>Total Price: {totalPrice} K Ar</Text>

            <Abutton title="Place Order" action={() => console.log("Order Placed")} />
            <Abutton title="Go Back" action={() => navigation.goBack()} color={Colors.my_black} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "left",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
});
