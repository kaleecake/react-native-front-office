
import { View, StyleSheet } from "react-native";
import Minputfield from "../mollecules/Minputfield";
import Parameters from "../../styles/param";
export default function OtypeText({ label, placeholder, onChangeText, value}){
    return(
        <View style = {styles.container}>
            <Minputfield
                label={label}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width: Parameters.full_size,
      height: "auto",
      padding: Parameters.param2
    }
});