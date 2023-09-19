import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import ProviderLocationScreen from "./ProviderLocationScreen";
import api from "../lib/api";

const AddParkingScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [hourlyRate, setHourlyRate] = useState("0");
  const [coordinates, setCoordinates] = useState({});
  const [location, setLocation] = useState({});

  const createParking = async () => {
    const data = {
      name,
      address,
      hourlyRate: Number(hourlyRate),
      coordinates: {
        x: 34,
        y: 43,
      },
      landmark: {},
    };
    const res = await api.parking.createParking(data);
    console.log(res);
  };

  // const [map, setMap] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Add Parking</Text>
        <View style={styles.divider}></View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>Name</Text>
          <TextInput
            value={name}
            onChangeText={(txt) => {
              setName(txt);
            }}
            style={styles.input}
            placeholder="Enter Name"
          />
        </View>
        <View style={styles.divider}></View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>Full Address</Text>
          <TextInput
            value={address}
            onChangeText={(txt) => {
              setAddress(txt);
            }}
            style={styles.input}
            placeholder="Enter Address"
          />
        </View>
        <View style={styles.divider}></View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>Hourly Rate</Text>
          <TextInput
            value={hourlyRate}
            style={styles.input}
            placeholder="Enter Hourly Rate"
            keyboardType="numeric"
            onChangeText={(txt) => {
              setHourlyRate(txt);
            }}
          />
        </View>
        <View style={styles.divider}></View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>
            Coordinates (Open physically in parking space)
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProviderLocationScreen")}
          >
            <Text style={[styles.input, { paddingTop: 7 }]}>
              Detect Coordinates
            </Text>
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>
            Location (Nearest on google maps)
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("DestinationSearchScreen")}
          >
            <Text style={[styles.input, { paddingTop: 7 }]}>
              Search Location
            </Text>
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
          </TouchableOpacity>
        </View>
        <Button onPress={createParking} title="Add Parking" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 100,
  },
  title: {
    fontSize: 25,
    width: "85%",
    fontWeight: "700",
    color: "black",
  },
  divider: {
    height: 25,
    width: "100%",
    backgroundColor: "white",
  },
  input_container: {
    width: "85%",
    backgroundColor: "white",
    // paddingVertical: 15,
    // paddingHorizontal: 15,
    // borderRadius: 5,
    // shadowColor: "gray",
    // shadowOffset: {
    //     width: 0,
    //     height: 0,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // elevation: 5,
  },
  input_head: {
    fontWeight: "500",
    color: "gray",
  },
  input: {
    color: "black",
    fontWeight: "600",
    paddingVertical: 2,
    paddingTop: 5,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: "teal",
  },
});

export default AddParkingScreen;
