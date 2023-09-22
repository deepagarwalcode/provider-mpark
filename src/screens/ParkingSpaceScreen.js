import { View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import OngoingParkingCard from "../components/Home/OngoingParkingCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import { useRoute } from "@react-navigation/native";
import api from "../lib/api";

const ParkingSpaceScreen = ({ navigation }) => {
  const route = useRoute();
  const [parking, setParking] = useState(null);
  const [bookings,setBookings] = useState([])
  const fetchParking = async () => {
    const parking = await api.parking.getParkingById(route.params.id);
    setParking(parking);
  };
const fetchBookings = async () => {
    const bookings = await api.booking.getBookingsByParking(route.params.id);
    setBookings(bookings);
  };

  useEffect(() => {
    fetchParking();
    fetchBookings()
  }, []);

  const [date] = useState(new Date()); // Using current date
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Format the date as "Month Date" initially
    const options = { month: "long", day: "numeric" };
    const initialFormattedDate = date.toLocaleDateString(undefined, options);
    setFormattedDate(initialFormattedDate);
  }, [date]);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const showStartMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: async (event) => {
        console.log(event.nativeEvent.timestamp);
        setStartTime(event.nativeEvent.timestamp);
        await api.parking.setAvailability(
          parking?._id,
          event.nativeEvent.timestamp,
          endTime
        );
      },
      mode: currentMode,
      minHour: 8,
      maxHour: 20,
      minuteInterval: 30,
    });
  };

  const showStartTimepicker = () => {
    showStartMode("time");
  };

  const showEndMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: async (event) => {
        console.log(event.nativeEvent.timestamp);
        setEndTime(event.nativeEvent.timestamp);
        await api.parking.setAvailability(
          parking?._id,
          startTime,
          event.nativeEvent.timestamp
        );
      },
      mode: currentMode,
      minHour: 8,
      maxHour: 20,
      minuteInterval: 30,
    });
  };

  const showEndTimepicker = () => {
    showEndMode("time");
  };

  const extractTimeString = (timestamp) => {
    if (timestamp == null) return null;
    const date = new Date(timestamp);
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedTime = date.toLocaleTimeString([], options);
    return formattedTime;
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Image
          source={
            "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          }
          style={{ width: "100%", height: 200 }}
        />
        <View style={styles.parking_info_container}>
          <View style={styles.parking_info}>
            <Text style={styles.ps_titles}>{parking?.name}</Text>
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                marginTop: 5,
              }}
            >
              {parking?.address}
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
                <Text
                  style={{ color: "gray", fontSize: 14, fontWeight: "500" }}
                >
                  1.14 km
                </Text>
              </View>
              <View style={styles.semi_details}>
                <Ionicons name="pricetag" size={16} color="black" />
                <Text
                  style={{ color: "gray", fontSize: 14, fontWeight: "500" }}
                >
                  ₹{parking?.hourlyRate}/hr
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
        <View style={styles.time_selector}>
          <Text style={styles.ps_titles}>Parking space availability:</Text>
          <View style={styles.time_inputs}>
            <TouchableOpacity
              style={styles.time_input}
              onPress={() => {
                showStartTimepicker();
                // showDatepicker();
              }}
            >
              <Text style={styles.ti_head}>From</Text>
              <Text style={styles.ti_time}>
                {extractTimeString(startTime) || "Select Start Time"}
              </Text>
              <Text style={styles.ti_date}>
                {formattedDate || "Tue, Sep 4"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.time_input}
              onPress={showEndTimepicker}
            >
              <Text style={styles.ti_head}>To</Text>
              <Text style={styles.ti_time}>
                {extractTimeString(endTime) || "Select End Time"}
              </Text>
              {/* <Text style={styles.ti_date}>Tue, Sep 4</Text> */}
              <Text style={styles.ti_date}>
                {formattedDate || "Tue, Sep 4"}
              </Text>
            </TouchableOpacity>
            <FontAwesome5
              name="arrow-alt-circle-right"
              size={24}
              color="black"
            />
          </View>
        </View>
        {/* <View style={styles.previous_parkings}>
        <Text style={styles.ps_titles}>Assign Security</Text>
        <Button style={styles.button} title="+ Add Security" />
      </View> */}
        <View style={styles.previous_parkings}>
          <Text style={styles.ps_titles}>Previous Parkings</Text>
          {bookings.reverse().map(booking => {
            return <OngoingParkingCard navigation={navigation} booking={booking} />
          })}
        </View>
      </View>
    </ScrollView>
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
  ps_titles: { fontWeight: "700", fontSize: 15, marginBottom: 10 },
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
    gap: 10,
  },
  button: {
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderColor: "teal",
    borderRadius: 5,
  },
  time_selector: {
    width: "100%",
    padding: 15,
    justifyContent: "space-between",
    overflow: "scroll",
    borderColor: "lightgray",
    borderBottomWidth: 5,
  },
  time_inputs: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 15,
    borderColor: "teal",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
  },
  ti_head: {
    fontWeight: "600",
    color: "teal",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  ti_time: {
    fontWeight: "600",
  },
  ti_date: {
    color: "gray",
  },
});

export default ParkingSpaceScreen;
