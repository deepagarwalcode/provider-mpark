import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CarCard from "./CarCard";
import ProfileCard from "./ProfileCard";
import { extractTimeString } from "../../lib/utils";

const OngoingParkingCard = ({navigation, booking}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("BookingScreen", booking)}>
      <CarCard endTime={booking?.end} />
      <View style={styles.line}></View>
      <ProfileCard startTime={extractTimeString(booking?.start)} endTime={extractTimeString(booking?.end)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 10,
    gap: 10,
    backgroundColor: "white",
    // borderColor: "lightgray",
    // borderWidth: 1,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    borderRadius: 5,
    marginBottom: 20
  },
  line: {
    backgroundColor: "whitesmoke",
    width: "95%",
    alignSelf: "center",
    height: 1,
  }
});

export default OngoingParkingCard;
