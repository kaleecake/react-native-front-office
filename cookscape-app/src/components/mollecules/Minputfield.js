import { View, Text, StyleSheet } from "react-native";
import Ainput from "../atoms/Ainput";
import Parameters from "../../styles/param";
import Colors from "../../styles/colors";
export default function Minputfield({label, placeholder, onChangeText, value, keyboardtype, security}){
    return(
        <View style ={styles.field}>
            <Text style={styles.label}>{label}</Text>
            <Ainput 
                security={security}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                keyboardtype={keyboardtype}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        // flex: 1,
        flexDirection: "column",
        // marginBottom: Parameters.param2,
        marginTop: 4,
        gap: 4,
    },
    label: {
        fontWeight: "semi-bold",
        fontFamily: 'Nacelle',
        color: Colors.my_primary_darker
    }
})