import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Aimage from "../components/atoms/Aimage";

export default function DishDetails({ route, navigation }) {
    const { dishDetails } = route.params;

    return (
        <View style={styles.container}>
            <Aimage {...dishDetails.image} style={styles.image} />
            <Text style={styles.title}>{dishDetails.title}</Text>
            <Text style={styles.info}>Description: {dishDetails.infos.description}</Text>
            <Text style={styles.info}>Price: {dishDetails.infos.price}</Text>
            <Text style={styles.info}>Ingredients: {dishDetails.infos.ingredients}</Text>
            
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
});
