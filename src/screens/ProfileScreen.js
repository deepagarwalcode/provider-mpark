import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import NavFooter from "../components/General/NavFooter";
import { TouchableOpacity } from "react-native";
import ParkingCard from "../components/Profile/ParkingCard";
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.name}>Deep Agarwal</Text>
            <View style={styles.icon}>
              <Ionicons name="person" size={24} color="black" />
            </View>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.option} onPress={()=> navigation.navigate("Home")}>
              <Ionicons name="help-buoy" size={24} color="black" />
              <Text>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={()=> navigation.navigate("BookingHistoryScreen")}>
              <Feather name="calendar" size={24} color="black" />
              <Text>Bookings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={()=> navigation.navigate("Home")}>
              <MaterialIcons name="attach-money" size={24} color="black" />
              <Text>Earnings</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.account_info}>
            <Text style={styles.title}>Account Info</Text>
            <View style={styles.info_container}>
              <Text style={styles.ic_head}>Name</Text>
              <Text>Deep Agarwal</Text>
            </View>
            <View style={styles.info_container}>
              <Text style={styles.ic_head}>Phone</Text>
              <Text>+91 8902021321</Text>
            </View>
            <View style={[styles.info_container, { borderBottomWidth: 0 }]}>
              <Text style={styles.ic_head}>Email</Text>
              <Text>deep72003@gmail.com</Text>
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.parkings}>
            <Text style={styles.title}>Your Parkings</Text>
            <ParkingCard navigation={navigation} />
            <ParkingCard navigation={navigation} />
            <TouchableOpacity style={styles.add_parking} onPress={() => navigation.navigate("AddParkingScreen")}>
              <Text style={{fontWeight: "600"}}>+ Add Parking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <NavFooter navigation={navigation} />
    </View>
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
  name: {
    fontSize: 30,
    fontWeight: "700",
    color: "black",
  },
  header: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "whitesmoke",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  options: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
  },

  option: {
    flex: 1,
    alignItems: "center",
    gap: 10,
    backgroundColor: "whitesmoke",
    borderRadius: 5,
    paddingVertical: 15,
  },
  divider: {
    height: 5,
    width: "100%",
    backgroundColor: "whitesmoke",
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: -5,
  },
  account_info: {
    width: "85%",
  },
  info_container: {
    paddingVertical: 10,
    borderBottomColor: "whitesmoke",
    borderBottomWidth: 1,
  },
  ic_head: {
    fontWeight: "600",
  },
  parkings: {
    width: "85%",
    alignItems: "flex-start",
    gap: 10,
    // backgroundColor: "red",
  },
  add_parking: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgray",
  }
});

export default ProfileScreen;
