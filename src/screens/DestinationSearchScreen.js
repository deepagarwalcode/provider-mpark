import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PlaceRow from "../components/DestinationSearch/PlaceRow";
import * as Location from "expo-location";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { useParking } from "../contexts/auth/Parking";

const DestinationSearch = ({ navigation }) => {
  //   const [originalPlace, setOriginalPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const parking = useParking();

  useEffect(() => {
    if (destinationPlace) {
      parking.setLocation(destinationPlace);
      navigation.goBack();
    }
  }, [destinationPlace]);

  //   const [location, setLocation] = useState(null);
  const [showNearbyPlaces, setShowNearbyPlaces] = useState(false);
  const autocompleteRef = useRef(null);

  //   useEffect(() => {
  //     (async () => {
  //       const { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status === "granted") {
  //         const locationData = await Location.getCurrentPositionAsync({});
  //         setLocation(locationData);
  //         console.log(
  //           locationData.coords.latitude,
  //           locationData.coords.longitude
  //         );
  //       }
  //     })();
  //   }, []);

  //   useEffect(() => {
  //     if (location && autocompleteRef.current) {
  //       const initialLocation = `${location.coords.latitude},${location.coords.longitude}`;
  //       autocompleteRef.current.setAddressText(initialLocation);
  //     }
  //   }, [location]);

  const handleShowNearbyPlaces = () => {
    setShowNearbyPlaces(true);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons
              style={styles.headerIcon}
              name="arrow-back"
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Enter Destination Details</Text>
          <View style={{ flex: 1 }} />
        </View>

        <View style={styles.circle}></View>
        {/* <View style={styles.line}></View>
        <View style={styles.square}></View> */}

        {/* <GooglePlacesAutocomplete
          placeholder="Where From?"
          ref={autocompleteRef}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details)
            setOriginalPlace({ data, details });
          }}
          // currentLocation={true}
          // currentLocationLabel="Current Location"
          styles={{
            textInput: styles.textInput,
            container: {
              position: "absolute",
              top: 100,
              left: 10,
              right: 10,
            },
            listView: {
              position: "absolute",
              top: 110,
            },
          }}
          fetchDetails={true}
          query={{
            key: "AIzaSyD0e8DR3xuSiyAsjYcYTLIJahx-uEp13cU",
            language: "en",
            components: "country:in", // Limit results to India
            // location: `${location?.coords?.latitude},${location?.coords?.longitude}`,
            // location: `22.6351866,88.4588476`,
            // radius: 10000,
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        /> */}
        <GooglePlacesAutocomplete
          placeholder="Where To?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details)
            setDestinationPlace({ data, details });
          }}
          styles={{
            textInput: styles.textInput,
            container: {
              position: "absolute",
              top: 100,
              left: 10,
              right: 10,
            },
          }}
          fetchDetails={true}
          query={{
            key: "AIzaSyD0e8DR3xuSiyAsjYcYTLIJahx-uEp13cU",
            language: "en",
            components: "country:in", // Limit results to India
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    padding: 20,
    paddingTop: 50,
    gap: 10,
    width: "100%",
    elevation: 10,
    backgroundColor: "white",
    height: "100%",
  },
  textInput: {
    backgroundColor: "whitesmoke",
    color: "gray",
    padding: 10,
    marginLeft: 15,
    fontWeight: "600",
    borderRadius: 3,
  },
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    color: "black",
    flex: 1,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    flex: 5,
  },
  circle: {
    height: 5,
    width: 5,
    backgroundColor: "black",
    position: "absolute",
    top: 120,
    left: 10,
    borderRadius: 10,
  },
  line: {
    height: 55,
    width: 1,
    backgroundColor: "black",
    position: "absolute",
    top: 120,
    left: 12,
  },
  square: {
    height: 5,
    width: 5,
    backgroundColor: "black",
    position: "absolute",
    top: 175,
    left: 10,
  },
});

export default DestinationSearch;
