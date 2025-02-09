import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/templates/Card";
import Parameters from "../styles/param";

const screenWidth = Dimensions.get("window").width;

export default function OrderList({ route }) {
    const [orders, setOrders] = useState(route.params?.items || []);

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const storedOrders = await AsyncStorage.getItem("orderList");
                if (storedOrders) {
                    setOrders(JSON.parse(storedOrders));
                }
            } catch (error) {
                console.error("Error loading orders:", error);
            }
        };
        loadOrders();
    }, []);

    const calculateTotalPrice = () => {
        return orders.reduce((total, item) => {
            const price = parseInt(item.infos.price) || 0;
            return total + price * item.quantity;
        }, 0);
    };

    const clearOrderList = async () => {
        setOrders([]);
        await AsyncStorage.removeItem("orderList");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Orders</Text>
            <FlatList
                data={orders}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Card
                        item={{
                            title: item.title,
                            image: { ...item.image},
                            infos: {
                                description: item.infos.description,
                                price: `Price: ${item.infos.price} Ar`,
                                quantity: `Quantity: ${item.quantity}`,
                            },
                        }}
                        style={styles.card}
                        textStyles={styles.textStyles}
                    />
                )}
            />
            <Text style={styles.total}>Total Price: {calculateTotalPrice()}K Ar</Text>
            <Button title="Clear Order List" onPress={clearOrderList} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center", // Ensures everything stays centered
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    card: {
        flexDirection: "column",
        alignItems: "center",
        padding: Parameters.param2,
        marginVertical: 5,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        width: "100%", // Ensures it fits the screen width
    },
    textStyles: {
        image: {
            width: 80,
            height: 80,
            borderRadius: 10,
            marginBottom: 10,
        },
        title: {
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 5,
        },
        info: {
            fontSize: 14,
            textAlign: "center",
            marginBottom: 2,
        },
    },
    total: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
});
