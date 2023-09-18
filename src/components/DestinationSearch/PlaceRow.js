import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-location-sharp" size={20} color="white" />
      </View>
      <Text>{data?.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    row:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
    },
    iconContainer: {
        backgroundColor: "lightgray",
        padding: 5,
        borderRadius: 100
    }
});

export default PlaceRow;
