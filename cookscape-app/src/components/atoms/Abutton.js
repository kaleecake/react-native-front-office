import Colors from "../../styles/colors"
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Parameters from "../../styles/param"
import Hierachy from "../../styles/hierachy";
export default function Abutton({title , action, buttonsize = Parameters.full_size}) {
    return(
        <TouchableOpacity style={[styles.button, {width: buttonsize}]} onPress={action}>
        <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.my_primary,
        padding: Parameters.param2,
        borderRadius: Parameters.param1,
    
    },
    text: {
        fontFamily: 'Nacelle',
        fontSize: Hierachy.button_title,
        textAlign: "center",
        color: Colors.my_white,
        
    }
});

