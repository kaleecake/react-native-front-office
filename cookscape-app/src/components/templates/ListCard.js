import { View, StyleSheet } from "react-native";
import Card from "./Card"; // Importing the Card component

export default function ListCard({ items = [], onPressButton, buttonTitle, containerStyle = {}, cardStyles = {} }) {
  return (
    <View style={[styles.container, containerStyle]}>
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          onPressButton={onPressButton}
          buttonTitle={buttonTitle}
          style={[styles.card, cardStyles]} 
          textStyles={cardStyles.textStyles} 
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "center",
    gap: 10,
  },
  card: {
    width: 150, 
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
