import {Text, TextInput, View, StyleSheet} from "react-native";
import Parameters from "../../styles/param";
// import { ImageBackground } from "react-native-web";
import  Colors  from "../../styles/colors";
import Hierachy from "../../styles/hierachy";
;
// import {  } from "react-native-web";

export default function Ainput({placeholder, onChangeText, value, keyboardtype, security}) {
    return (
       <View style={[styles.input, {width: "100%" }]}>
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
        // flex: 1,
        // margin: 0,
        width: "100%",
        // height: Parameters.param3,
        paddingTop: Parameters.param1,
        paddingBottom: Parameters.param1,
        borderBottomWidth: 1,
        borderBottomColor: Colors.my_black
        
    },

    placeholder: {
        fontFamily: 'Nacelle',
        fontSize: Hierachy.button_title,
        color: Colors.grayed_item,
        marginLeft: Parameters.param1
    }

});
