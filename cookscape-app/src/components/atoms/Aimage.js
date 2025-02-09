import { Image, StyleSheet } from "react-native";
import Parameters from "../../styles/param";

export default function Aimage({ source, width, height }) {
    console.log("Aimage received props:", { source, width, height });

    if (!source) {
        console.warn("Aimage is missing imageProps or source");
    }

    return <Image style={[styles.img, { width, height }]} source={source} />;
}
    

const styles = StyleSheet.create({
    img: {
        borderRadius: Parameters.param1,
    },
});
