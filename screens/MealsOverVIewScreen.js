import React, {useLayoutEffect} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";

// import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

export default function MealsOverVIewScreen({ route, navigation }) {
  //    const route = useRoute()
  //    route.params.categoryId

  const catId = route?.params?.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });



  useLayoutEffect(()=>
    {
      const categoryTitle = CATEGORIES.find(category => category.id === catId).title
      navigation.setOptions({
        title: categoryTitle
      })
    },[catId, navigation])

  
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id:item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
    
  }
  return (
    <View style={styles.container}>
      {/* {tiling} */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
