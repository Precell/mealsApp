import { View, Text, Image } from 'react-native'
import React from 'react'

import { MEALS } from '../data/dummy-data'

const MealDetailScreen = ({route}) => {
  
    const mealId = route.params.mealId
  
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)


    return (
    <View>
      <Text>
        <Image source={{uri: selectedMeal.imageUrl}}/>
        <Text>{selectedMeal.title}</Text>

        <MealDetailScreen duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
        
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) =><Text key={ingredient}>{ingredient}</Text>)}
        <Text>

        {selectedMeal.steps.map((step) =><Text key={step}>{step}</Text>)}
        </Text>
      </Text>
    </View>
  )
}

export default MealDetailScreen