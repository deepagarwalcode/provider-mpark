import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import OngoingParkingCard from "../components/Home/OngoingParkingCard";

const ParkingSpaceScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <Image
        source={
          "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
        }
        style={{ width: "100%", height: 200 }}
      />
      <View style={styles.parking_info_container}>
        <View style={styles.parking_info}>
          <Text style={styles.ps_titles}>Name of the Parking</Text>
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              marginTop: 5,
            }}
          >
            First Line of Address upto Specific no of characters Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Quisquam, est?
          </Text>
          <View
            style={{
              flexDirection: "row",
              maxWidth: "89%",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View style={styles.semi_details}>
              <FontAwesome name="location-arrow" size={16} color="black" />
              <Text style={{ color: "gray", fontSize: 14, fontWeight: "500" }}>
                1.14 km
              </Text>
            </View>
            <View style={styles.semi_details}>
              <Ionicons name="pricetag" size={16} color="black" />
              <Text style={{ color: "gray", fontSize: 14, fontWeight: "500" }}>
                ₹30/hr
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "white",
            width: 45,
            height: 45,
            borderRadius: 1000,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="location-arrow" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.previous_parkings}>
      <Text style={styles.ps_titles}>Previous Parkings</Text>
          <OngoingParkingCard navigation={navigation} />
          <OngoingParkingCard navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parking_info_container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    justifyContent: "space-between",
    overflow: "scroll",
    borderColor: "lightgray",
    borderBottomWidth: 5,
  },
  ps_titles: { fontWeight: "700", fontSize: 15 },
  parking_info: {
    width: "80%",
  },
  semi_details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  previous_parkings: {
    width: "100%",
    padding: 15,
    gap: 10
  },
});

export default ParkingSpaceScreen;
