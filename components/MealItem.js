import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const MealItem = ({ title, imageUrl }) => {
  return (
    <View>
      <Pressable>
        <View> 
            <Image source={{uri:imageUrl}}/>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
