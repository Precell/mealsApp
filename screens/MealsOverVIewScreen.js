import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";


export default function MealsOverVIewScreen({ route }) {
//    const route = useRoute()
//    route.params.categoryId

    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) =>{
        return mealItem.categoryIds.indexOf(catId) >= 0
    })


    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>
    }
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
