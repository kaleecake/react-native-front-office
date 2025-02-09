import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/templates/Card";
import Abutton from "../components/atoms/Abutton";
import Colors from "../styles/colors";

export default function Receipt({ route, navigation }) {
    const { items = [] } = route.params; // Default to an empty array if no items are passed

    if (items.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>No items selected.</Text>
                <Abutton title="Go Back" action={() => navigation.goBack()} color={Colors.my_black} />
            </View>
        );
    }

    // Calculate total price dynamically
    const totalPrice = items.reduce((sum, item) => {
        const price = parseFloat(item.infos.price.replace("K Ar", "").replace(" ", ""));
        return sum + price * item.quantity;
    }, 0);

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <Card
                        item={{
                            title: item.title,
                            image: item.image,
                            infos: {
                                description: item.infos.description,
                                price: `${item.infos.price} x ${item.quantity}`,
                                quantity: `Quantity: ${item.quantity}`,
                            },
                        }}
                        style={styles.card}
                    />
                )}
            />

            {/* Total Price */}
            <Text style={styles.totalPrice}>Total Price: {totalPrice} K Ar</Text>

            {/* Buttons */}
            <Abutton title="Place Order" action={() => console.log("Order Placed")} />
            <Abutton title="Go Back" action={() => navigation.goBack()} color={Colors.my_black} />
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
    card: {
        width: "90%",
        backgroundColor: Colors.my_pre_white,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 20,
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    emptyText: {
        fontSize: 18,
        color: "gray",
        textAlign: "center",
    },
});
