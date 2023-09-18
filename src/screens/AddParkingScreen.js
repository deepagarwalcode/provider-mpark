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

const AddParkingScreen = ({ navigation }) => {

  const [map, setMap] = useState(false)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Add Parking</Text>
        <View style={styles.divider}></View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>Full Address</Text>
          <TextInput style={styles.input} placeholder="Enter Name" />
        </View>
        <View style={styles.divider}></View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>
            Coordinates (Open physically in parking space)
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("ProviderLocationScreen")}>
            <Text style={[styles.input, { paddingTop: 7 }]}>
              Detect Coordinates
            </Text>
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.divider}>

        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>Location (Nearest on google maps)</Text>
          <TouchableOpacity onPress={() => navigation.navigate("DestinationSearchScreen")}>
            <Text style={[styles.input, { paddingTop: 7 }]}>
              Search Location
            </Text>
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
          </TouchableOpacity>
        </View>
        <Button title="Add Parking" />
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
