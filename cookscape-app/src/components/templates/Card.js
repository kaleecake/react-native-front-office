import { View, Text, StyleSheet } from "react-native";
import Aimage from "../atoms/Aimage";
import Abutton from "../atoms/Abutton";
import Parameters from "../../styles/param";

export default function Card({ 
  item, 
  onPressButton, 
  buttonTitle, 
  style = {}, 
  textStyles = {} 
}) {
  return (
    <View style={[styles.card, style]}>
      {/* Image */}
      <Aimage {...item.image} style={[styles.image, textStyles.image]} />

      {/* Title */}
      <Text style={[styles.title, textStyles.title]}>{item.title}</Text>

      {/* Dynamic Infos */}
      {item.infos &&
        Object.entries(item.infos).map(([key, value]) => (
          <Text key={key} style={[styles.infoText, textStyles.info]}>
            <Text style={[styles.boldText, textStyles.bold]}>{key}:</Text> {value}
          </Text>
        ))}

      {/* Button (Only Rendered if buttonTitle is Provided) */}
      {buttonTitle && (
        <Abutton title={buttonTitle} action={onPressButton} style={[styles.button, textStyles.button]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: Parameters.param1,
    // shadowColor: "#000",
    // shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
  },
  image: {
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: "#444",
  },
  boldText: {
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
  },
});
