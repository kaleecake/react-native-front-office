import { View, StyleSheet } from "react-native";
import Minputfield from "../mollecules/Minputfield";
import Parameters from "../../styles/param";
export default function OtypePassword({ placeholder, onChangeText, value, security}){
    return(
        <View style = {styles.container}>
            <Minputfield
                label="Password:"
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                security={true}
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