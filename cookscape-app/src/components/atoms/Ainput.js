import {Text, TextInput, View, StyleSheet} from "react-native";
import Parameters from "../../styles/param";
// import { ImageBackground } from "react-native-web";
import  Colors  from "../../styles/colors";
import Hierachy from "../../styles/hierachy";
;
// import {  } from "react-native-web";

export default function Ainput({placeholder, onChangeText, value, keyboardtype, security}) {
    return (
       <View style={styles.input}>
        <TextInput
            secureTextEntry= {security} 
            style={styles.placeholder}
            placeholder= {placeholder}
            onChangeText={onChangeText}
            value = {value}
            keyboardType={keyboardtype}
        />
    </View> 
    )
}
const styles = StyleSheet.create({
    input: {
        width: Parameters.full_size,
        // height: Parameters.param3,
        paddingTop: Parameters.param1,
        paddingBottom: Parameters.param2,
        paddingHorizontal: Parameters.param2,
        backgroundColor: Colors.my_grey,
        borderRadius: Parameters.param1,
        // borderColor: "none"
        
    },

    placeholder: {
        fontFamily: 'Nacelle',
        fontSize: Hierachy.button_title,
        color: Colors.grayed_item
    }

});
