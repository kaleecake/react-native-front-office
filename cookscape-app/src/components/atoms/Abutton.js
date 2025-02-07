import Colors from "../../styles/colors"
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Parameters from "../../styles/param"
import Hierachy from "../../styles/hierachy";
export default function Abutton({title , action, buttonsize = Parameters.full_size, color= Colors.my_primary}) {
    return(
        <TouchableOpacity style={[styles.button, {width: buttonsize}, {backgroundColor: color} ]} onPress={action}>
        <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        // backgroundColor: Colors.my_primary,
        padding: Parameters.param1,
        borderRadius: Parameters.param1,
    },
    text: {
        fontFamily: 'Nacelle',
        fontSize: Hierachy.button_title,
        textAlign: "center",
        color: Colors.my_white,
        
    }
});

