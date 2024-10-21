import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route }) => {
  const mealId = route?.params?.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log();

  return (
    <View>
      {/* <Image source={{ uri: selectedMeal.imageUrl }} /> */}
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.subTitleContaier}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>

      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <View style={styles.subTitleContaier}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>

      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContaier: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
