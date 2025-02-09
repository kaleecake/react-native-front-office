import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MbigButton from "../mollecules/MbigButton";
import Parameters from "../../styles/param";
import Abutton from "../atoms/Abutton";
import OtypeNumber from "../organisms/OtypeNumber"; 

export default function ListClickable({ items, onItemPress, showButton, buttonTitle, onButtonPress, showIncrementButton, quantities, onQuantityChange }) {

    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <View key={index} style={styles.itemWrapper}>
                    <MbigButton
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        onPress={() => onItemPress(item)}
                    />
                    {showButton && (
                        <Abutton
                            title={buttonTitle}
                            action={() => onButtonPress(item)}
                        />
                    )}

                    {showIncrementButton && (
                        <View style={styles.quantityContainer}>
                            <Text
                                style={styles.button}
                                onPress={() => onQuantityChange(item.title, quantities[item.title] + 1)}
                            >
                                +
                            </Text>
                            <Text
                                style={styles.button}
                                onPress={() => onQuantityChange(item.title, quantities[item.title] - 1)}
                            >
                                -
                            </Text>

                            <OtypeNumber
                                label="Quantity"
                                placeholder="Enter quantity"
                                value={quantities[item.title].toString()}  
                                onChangeText={(newValue) => onQuantityChange(item.title, newValue)}  
                            />
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    itemWrapper: {
        flex: 1,
        marginBottom: Parameters.param1,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: Parameters.param1,
    },
    button: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 10,
        cursor: "pointer",
    },
});
