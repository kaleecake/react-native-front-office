import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListClickable from "../components/templates/ListClickable";
import OtypeNumber from "../components/organisms/OtypeNumber";

export default function Home({ navigation, route }) {
    const imageProps = {
        width: 150,
        height: 150,
        source: require("../../assets/img/images.jpg")
    };

    const items = [
        { image: imageProps, title: "Dish 1", description: "Tasty food", price: "10K Ar" },
        { image: imageProps, title: "Dish 2", description: "Delicious meal", price: "20K Ar" },
        { image: imageProps, title: "Dish 3", description: "Yummy snack", price: "10K Ar" }
    ];

    const [userData, setUserData] = useState(route.params?.userData || null);
    const [quantities, setQuantities] = useState({
        "Dish 1": 0,
        "Dish 2": 0,
        "Dish 3": 0,
    });

    useEffect(() => {
        const loadUserData = async () => {
            const storedData = await AsyncStorage.getItem("userData");
            if (storedData) {
                setUserData(JSON.parse(storedData));
            }
        };
        loadUserData();
    }, []);

    const handleItemPress = (item) => {
        console.log("Clicked:", item.title);
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem("userData");
        navigation.replace("Login");
    };

   const handleButtonPress = (item) => {
    const quantity = quantities[item.title]; 
    console.log("Item sent:", item, "Quantity:", quantity);
    navigation.navigate("Receipt", {
        dishDetails: item,
        quantity: quantity,
    });
};

    const handleQuantityChange = (itemTitle, newValue) => {
        const numericValue = parseInt(newValue, 10);
        if (!isNaN(numericValue) && numericValue >= 0) {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [itemTitle]: numericValue,
            }));
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome, {userData?.email || "User"}!</Text>
                <ListClickable
                    items={items}
                    onItemPress={handleItemPress}
                    showButton={true}
                    buttonTitle="Order"
                    onButtonPress={handleButtonPress}
                    showIncrementButton={true}
                    quantities={quantities} 
                    onQuantityChange={handleQuantityChange}  
                />
                <Button title="Log out" onPress={handleLogout} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    welcome: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
});
