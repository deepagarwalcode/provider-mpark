import { View, Text, StyleSheet, Linking } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Zocial } from "@expo/vector-icons";

const ProfileCard = ({ user }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 80,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          contentFit="cover"
          source={
            user?.image ||
            "https://images.unsplash.com/photo-1552234994-66ba234fd567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          }
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: "500", fontSize: 14 }}>
          {user?.name || "Deep Agarwal"}
        </Text>
        {/* <Text style={{ fontWeight: "500", color: "gray", fontSize: 12 }}>
          {user?.timings || "2:00PM - 4:00PM"}
        </Text> */}
      </View>
      <View style={styles.icon}>
        <Zocial
          name="call"
          size={16}
          color="black"
          onPress={() => {
            Linking.openURL(`tel:${user.phoneNo}`);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    gap: 5,
    //   paddingBottom: 5,
    // justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
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

export default ProfileCard;
