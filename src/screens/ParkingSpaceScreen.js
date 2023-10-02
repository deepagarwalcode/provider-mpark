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
import { extractTimeString } from "../lib/utils";
import AddSecurityModal from "../components/ParkingScreen/AddSecurityModal";
import ProfileCard from "../components/Home/ProfileCard";

const ParkingSpaceScreen = ({ navigation }) => {
  const route = useRoute();
  const [parking, setParking] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [security, setSecurity] = useState(null);
  const [startTime, setStartTime] = useState(parking?.start || null);
  const [endTime, setEndTime] = useState(parking?.end || null);

  const fetchParking = async () => {
    const parking = await api.parking.getParkingById(route.params.id);
    setParking(parking);
    setStartTime(parking?.start);
    setEndTime(parking?.end);
  };
  const fetchBookings = async () => {
    const bookings = await api.booking.getBookingsByParking(route.params.id);
    setBookings(bookings);
  };
  const fetchSecurity = async () => {
    const security = await api.user.getSecurityById(parking?.security);
    console.log("SECURTIY", security);
    setSecurity(security);
  };

  useEffect(() => {
    fetchParking();
    fetchBookings();
  }, []);

  useEffect(() => {
    fetchSecurity();
  }, [parking, addSecurityModal]);

  const [date] = useState(new Date()); // Using current date
  const [formattedDate, setFormattedDate] = useState("");
  const [addSecurityModal, setAddSecurityModal] = useState(false);

  useEffect(() => {
    // Format the date as "Month Date" initially
    const options = { month: "long", day: "numeric" };
    const initialFormattedDate = date.toLocaleDateString(undefined, options);
    setFormattedDate(initialFormattedDate);
  }, [date]);

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
        <View style={styles.previous_parkings}>
          <Text style={styles.ps_titles}>Security</Text>
          {parking?.security ? (
            <View style={styles.security_card}>
              <View
                style={{
                  width: 50,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  contentFit="cover"
                  source={
                    security?.image ||
                    "https://images.unsplash.com/photo-1552234994-66ba234fd567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  }
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 12 }}>
                  {security?.name || "Deep lol"}
                </Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setAddSecurityModal(true)}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "600",
                  textAlign: "center",
                  paddingVertical: 7,
                }}
              >
                Assign Security
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.previous_parkings}>
          <Text style={styles.ps_titles}>Previous Parkings</Text>
          {bookings.reverse().map((booking, index) => {
            return (
              <OngoingParkingCard
                key={index}
                navigation={navigation}
                booking={booking}
              />
            );
          })}
        </View>
      </View>
      {addSecurityModal && (
        <AddSecurityModal
          setAddSecurityModal={setAddSecurityModal}
          parkingId={parking?._id}
        />
      )}
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
    borderColor: "lightgray",
    borderTopWidth: 5,
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
  security_card: {
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    gap: 5,
    //   paddingBottom: 5,
    // justifyContent: "space-between",
  },
  icon: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "whitesmoke",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
  },
});

export default ParkingSpaceScreen;
