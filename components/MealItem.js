import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
            <Text>{duration}n</Text>
            {/* <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text> */}
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
        mealItem:{
            margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor: 'white'

        },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin:8
  },
  details:{
    flex:'row',
    alignItems:"center",
    padding:8
  }
});
