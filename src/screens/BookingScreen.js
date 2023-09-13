import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CarCard from "../components/BookingScreen/CarCard";
import ProfileCard from "../components/BookingScreen/ProfileCard";
import NavFooter from "../components/General/NavFooter";

const BookingScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView
        style={{ height: "100%", width: "100%", backgroundColor: "white" }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={{
                textAlign: "left",
                flex: 1,
                fontWeight: 600,
                fontSize: 20,
              }}
            >
              Booking Details
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.user_info}>
            <Text style={styles.sub_header}>User Details</Text>
            <ProfileCard />
          </View>
          <View style={styles.divider} />

          <View style={styles.user_info}>
            <Text style={styles.sub_header}>Vehicle Details</Text>
            <CarCard />
          </View>
          <View style={styles.divider} />
          <View style={styles.user_info}>
            <Text style={styles.sub_header}>Booking Details</Text>
            <View style={styles.table}>
              <View style={styles.table_row}>
                <Text style={styles.tr1}>Start Time </Text>
                <Text style={styles.tr2}>2021-09-13 4:00 PM</Text>
              </View>
              <View style={styles.table_row}>
                <Text style={styles.tr1}>End Time</Text>
                <Text style={styles.tr2}>2021-09-13 6:00 PM</Text>
              </View>
              <View style={styles.table_row}>
                <Text style={styles.tr1}>Starting In</Text>
                <Text style={styles.tr2}>01:10:23</Text>
              </View>
              <View style={styles.table_row}>
                <Text style={styles.tr1}>Ending In</Text>
                <Text style={styles.tr2}>01:10:23</Text>
              </View>
              <View style={styles.table_row}>
                <Text style={styles.tr1}>Price</Text>
                <Text style={styles.tr2}>₹60 (₹30/hr)</Text>
              </View>
              <View style={styles.table_row}>
                <Text style={styles.tr1}>Location</Text>
                <Text style={styles.tr2}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Modi, vel?
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.booking_button}>
            {/* <View> */}
              <Text style={{color: "white", fontWeight: "700", fontSize: 15, textTransform: "capitalize"}}>Start/End Parking</Text>
            {/* </View> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <NavFooter navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
    height: "100%",
    alignItems: "center",
    paddingBottom: 100,
  },

  header: {
    width: "85%",
    marginBottom: 5,
  },
  sub_header: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  divider: {
    height: 20,
    backgroundColor: "transparent",
    width: "100%",
  },
  user_info: {
    width: "85%",
  },

  table: {
    backgroundColor: "white",
    gap: 3,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    // borderColor: "lightgray",
    // borderWidth: 1
  },

  table_row: {
    flexDirection: "row",
    gap: 3,
  },
  tr1: {
    flex: 2,
    color: "gray",
    fontWeight: "500",
    fontSize: 12,
  },
  tr2: {
    flex: 5,
    fontWeight: "500",
    fontSize: 12,
  },
  booking_button: {
    width: "85%",
    backgroundColor: "teal",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
});

export default BookingScreen;
