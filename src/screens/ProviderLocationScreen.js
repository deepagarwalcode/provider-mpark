import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";

import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const ProviderLocationScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
      console.log(currentLocation);
      console.log(location);
    })();
  }, []);

  //   useEffect(() => {
  //     if (location) {
  //       console.log(location?.details);
  //     }
  //   }, [location]);

  const circleCenter = { latitude: 22.5809743, longitude: 88.41236465 };
  const origin = { latitude: 22.634606146549462, longitude: 88.4587195538794 };
  const destination = {
    latitude: 22.62325415206964,
    longitude: 88.45019810969973,
  };
  return (
    <View style={styles.home}>
      <View style={{ height: "100%", width: "100%" }}>
        {/* <View style={{ height: "80%", width: "80%", borderRadius: 15, position: "absolute", top: 70, alignSelf: "center" }}> */}
        <MapView
          style={{ height: "100%", width: "100%" }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
          }}
        >
          <Marker coordinate={currentLocation?.coords} title="Origin" />
        </MapView>
        <TouchableOpacity style={styles.confirm_button} onPress={() => {navigation.goBack()}}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "600",
              flex: 1,
            }}
          >
            Confirm Coordinates
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    width: "100%",
    flex: 1,
    // backgroundColor: "blue",
    alignItems: "center",
  },
  confirm_button: {
    flexDirection: "row",
    backgroundColor: "teal",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    gap: 10,
    textAlign: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});

export default ProviderLocationScreen;
