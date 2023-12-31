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
import { useParking } from "../contexts/auth/Parking";
import * as DocumentPicker from "expo-document-picker";

const AddParkingScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [hourlyRate, setHourlyRate] = useState("0");
  const [coordinates, setCoordinates] = useState({});
  const [location, setLocation] = useState({});

  const parking = useParking();

  const createParking = async () => {
    try {
      const data = {
        name,
        address,
        hourlyRate: Number(hourlyRate),
        coordinates: parking?.coordinates,
        landmark: parking.location,
      };
      const formData = new FormData();
      formData.append("photo", doc);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("hourlyRate", Number(hourlyRate));
      formData.append("coordinates", JSON.stringify(parking?.coordinates));
      formData.append("landmark", JSON.stringify(parking?.location));
      console.log(data);
      const res = await api.parking.createParking(data);
      console.log(res);
      navigation.navigate("ProfileScreen");
    } catch (error) {
      console.log(error);
    }
  };

  const [doc, setDoc] = useState();
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    }).then((response) => {
      console.log(response.assets[0]);
      // if (response.type == "success") {
      let { name, size, uri } = response.assets[0];
      let nameParts = name.split(".");
      let fileType = nameParts[nameParts.length - 1];
      var fileToUpload = {
        name: name,
        size: size,
        uri: uri,
        type: "application/" + fileType,
      };
      console.log(fileToUpload, "...............file");
      setDoc(fileToUpload);
      // }
    });
    // console.log(result);
    // console.log("Doc: " + doc.uri);
  };

  const postDocument = async () => {
    const url = `${BASE_URL}/upload`;
    const fileUri = doc.uri;
    const formData = new FormData();
    formData.append("document", doc);

    console.log(formData);

    const response = await axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
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
        <View style={styles.divider}></View>

        <View style={styles.input_container}>
          <Text style={styles.input_head}>Add Parking Picture</Text>
          <TouchableOpacity onPress={pickDocument}>
            <Text style={[styles.input, { paddingTop: 7 }]}>
              Select Picture
            </Text>
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
            {/* <TextInput style={styles.input} placeholder="Search Location" /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>

        {/* <Button onPress={createParking} title="Add Parking" /> */}
        <TouchableOpacity
          onPress={createParking}
          style={{
            width: "85%",
            backgroundColor: "teal",
            paddingVertical: 7,
            borderRadius: 3,
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "600" }}
          >
            Add Parking
          </Text>
        </TouchableOpacity>
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
