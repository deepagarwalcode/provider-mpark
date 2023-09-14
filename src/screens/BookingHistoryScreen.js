import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import OngoingParkingCard from "../components/Home/OngoingParkingCard";
import NavFooter from "../components/General/NavFooter";

const BookingHistoryScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={{ height: "100%", backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.icon}>
              <Ionicons name="person" size={18} color="black" />
            </View>
            <Text style={styles.name}>Deep Agarwal</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.ongoing_parkings}>
            <Text style={styles.title}>Previous Parkings:</Text>
            <OngoingParkingCard navigation={navigation} />
            <OngoingParkingCard navigation={navigation} />
            <OngoingParkingCard navigation={navigation} />
            <OngoingParkingCard navigation={navigation} />
            <OngoingParkingCard navigation={navigation} />
          </View>
        </View>
      </ScrollView>
      <NavFooter navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingBottom: 100,
  },
  divider: {
    width: "100%",
    height: 30,
    backgroundColor: "transparent",
  },
  name: {
    fontSize: 25,
    fontWeight: "700",
    color: "black",
  },
  header: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "whitesmoke",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
  },
  ongoing_parkings: {
    width: "85%",
  },
});

export default BookingHistoryScreen;
