import { View, Text, StyleSheet } from "react-native";
import React, { Children } from "react";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subTitleContaier}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subTitleContaier: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
      },
})
