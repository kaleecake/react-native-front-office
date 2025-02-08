import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Aimage from "../atoms/Aimage";

export default function AbigButton({image, title, description, price, onPress, width}){
    return( 
        <View style={[styles.touchableOpacity,{width: width}, {height: height}]}>
            <TouchableOpacity onPress={onPress}>
                <Aimage imageProps={image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{price}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    touchableOpacity: {

    }
});