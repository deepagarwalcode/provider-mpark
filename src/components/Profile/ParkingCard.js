import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

const ParkingCard = ({ navigation, name, hourlyRate, address }) => {
  return (
    <TouchableOpacity
      style={styles.parking_card}
      onPress={() => navigation.navigate("ParkingSpaceScreen")}
    >
      <View style={styles.pc_top}>
        <Image
          source={
            "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          }
          style={{ width: 70, height: 90, objectFit: "cover", borderRadius: 5 }}
        />
        <View style={styles.pc_info}>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>
            Name of the Parking
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 12,
              color: "gray",
              width: "90%",
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {address}
          </Text>
          <View
            style={{
              flexDirection: "row",
              maxWidth: "89%",
              justifyContent: "space-between",
              marginTop: "auto",
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
                ₹{hourlyRate}/hr
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parking_card: {
    // position: "absolute",
    // bottom: 90,
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    overflow: "hidden",
    gap: 10,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  pc_top: {
    flexDirection: "row",
    gap: 10,
    height: 90,
  },
  pc_info: {
    // backgroundColor: "red",
    width: "80%",
  },
  semi_details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default ParkingCard;
