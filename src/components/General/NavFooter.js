import { View, Text, Touchable, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const NavFooter = ({navigation}) => {
  return (
    <View style={styles.nav_footer}>
      <TouchableOpacity style={styles.nav_item} onPress={() => navigation.navigate("Home")}>
        <Feather name="home" size={20} color="black" />
        <Text style={styles.nav_text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.nav_item, {flex: 2}]} onPress={() => navigation.navigate("BookingsScreen")}>
        <Feather name="calendar" size={20} color="black" />
        <Text style={styles.nav_text}>Bookings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nav_item} onPress={() => navigation.navigate("ProfileScreen")}>
        <Ionicons name="person-outline" size={20} color="black" />
        <Text style={styles.nav_text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    nav_footer: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: "90%",
        borderColor: "lightgray",
        borderWidth: 1,
        position: "absolute",
        bottom: 15,
        borderRadius: 5,
        flexDirection: "row",
        gap: 10,
        alignSelf: "center"
    },
    nav_item:{
        flex: 1,
        alignItems: "center",
        fontSize: 10,
        gap: 2
    },
    nav_text: {
        fontSize: 12,
    }
})

export default NavFooter;
