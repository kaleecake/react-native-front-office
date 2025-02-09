import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView, Modal, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListClickable from "../components/templates/ListClickable";
import Aimage from "../components/atoms/Aimage";
import Abutton from "../components/atoms/Abutton";
import {handleNavigate} from "../../src/@utils/navigationHelper"
export default function Home({ navigation, route }) {
    const [selectedDish, setSelectedDish] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const imageProps = {
        width: 150,
        height: 150,
        source: require("../../assets/img/images.jpg"),
    };

    const items = [
        { 
            image: imageProps, 
            title: "Dish 1", 
            infos: {
                description: "Tasty food", 
                price: "10K Ar",
                ingredients: "Chicken, Rice, Spices",
                prep_time: "20 min"
            }
        },
        { 
            image: imageProps, 
            title: "Dish 2", 
            infos: {
                description: "Delicious meal", 
                price: "20K Ar",
                ingredients: "Beef, Potatoes, Vegetables",
                prep_time: "20 min"

            }
        },
        { 
            image: imageProps, 
            title: "Dish 3", 
            infos: {
                description: "Yummy snack", 
                price: "10K Ar",
                ingredients: "Bread, Cheese, Ham",
                prep_time: "20 min"
            }
        },
    ];

    const [userData, setUserData] = useState(route.params?.userData || null);
    const [quantities, setQuantities] = useState({
        "Dish 1": 1,
        "Dish 2": 1,
        "Dish 3": 1,
    });

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedData = await AsyncStorage.getItem("userData");
                if (storedData) {
                    setUserData(JSON.parse(storedData));
                }
            } catch (error) {
                console.error("Error loading user data:", error);
            }
        };
        loadUserData();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem("userData");
        navigation.replace("Login");
    };

    const handleItemPress = (item) => {
        setSelectedDish(item);
        setModalVisible(true);
    };

    // const handleOrder = () => {
    //     const selectedItems = items
    //         .filter(item => quantities[item.title] > 0)  
    //         .map(item => ({
    //             ...item,
    //             quantity: quantities[item.title], 
    //         }));
    
    //     if (selectedItems.length === 0) {
    //         alert("Please select at least one dish!");
    //         return;
    //     }
    
    //     navigation.navigate("Receipt", { items: selectedItems });
    // };
    

    const handleOrder = () => {
        if (!selectedDish) {
            alert("No dish selected!");
            return;
        }
        const quantity = quantities[selectedDish.title] || 1;
        
        handleNavigate(navigation, "Receipt", { 
            items: [{ 
                ...selectedDish, 
                quantity 
            }] 
        });
    
        setModalVisible(false);
    };
    
    
    
    const handleButtonPress = async (item) => { 
        if (!item) {
            alert("No dish selected!");
            return;
        }
    
        const quantity = quantities[item.title] || 1;
        const newOrder = { 
            ...item, 
            quantity 
        };
    
        try {
            const storedOrders = await AsyncStorage.getItem("orderList");
            const orderList = storedOrders ? JSON.parse(storedOrders) : [];
    
            orderList.push(newOrder);
    
            await AsyncStorage.setItem("orderList", JSON.stringify(orderList));
    
            handleNavigate(navigation, "OrderList", { items: orderList });
    
            setModalVisible(false);
        } catch (error) {
            console.error("Error saving order:", error);
            alert("Failed to save the order.");
        }
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
                {/* <Text style={styles.welcome}>Welcome, {userData?.email || "User"}!</Text>
                 */}
                <Text>Our Menu </Text>
                    <ListClickable
                        items={items}
                        onItemPress={handleItemPress}
                        showButton={true}
                        buttonTitle="list order"
                        onButtonPress={(item) => handleButtonPress(item)} 
                        showIncrementButton={true}
                        quantities={quantities}
                        onQuantityChange={handleQuantityChange}
                    />
                <Button title="Log out" onPress={handleLogout} />
            </View>

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>

                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedDish && (
                            <> 
                                <Aimage {...selectedDish.image} />
                                <Text style={styles.modalTitle}>{selectedDish.title}</Text>
                                <Text>{selectedDish.infos.description}</Text>
                                <Text>Price: {selectedDish.infos.price}</Text>
                                <Text>Ingredients: {selectedDish.infos.ingredients}</Text>
                                <Text>preparation time: {selectedDish.infos.prep_time}</Text>
                                <Abutton title="Order" action={handleOrder} />
                                <Button title="Close" onPress={() => setModalVisible(false)} />
                            </>
                        )}
                    </View>
                </View>
            </Modal>
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
    modalOverlay: {  
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {  
        position: "absolute",
        bottom: 0,  
        width: "100%",
        alignItems: "center",
    },
    modalContent: {  
        width: "90%",  
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,  
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    modalTitle: { 
        fontSize: 20, 
        fontWeight: "bold", 
        marginBottom: 10 
    },
});
