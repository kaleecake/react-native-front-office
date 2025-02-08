import { Image , View } from "react-native"
import Parameters from "../../styles/param"

export default function Aimage({ imageProps }) {
    return (
      <Image 
        style={[styles.img, { width: imageProps.width, height: imageProps.height }]}
        source={imageProps.source}
      />
    );
  }
styles = StyleSheet.create({
    img: {
        borderRadius: Parameters.param1
    }
})