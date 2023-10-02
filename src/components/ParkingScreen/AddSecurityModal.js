import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import api from "../../lib/api";
import { Image } from "expo-image";

const AddSecurityModal = ({ setAddSecurityModal, parkingId }) => {
  const [phoneNo, setPhoneNo] = useState("");
  const [security, setSecurity] = useState("");

  const searchSecurity = async () => {
    try {
      const security = await api.security.findSecurityByPhoneNo(phoneNo);
      console.log(security);
      setSecurity(security);
    } catch (error) {
      setSecurity({
        name: "No Security found",
      });
      console.log(error);
    }
  };

  const confirmSecurity = async () => {
    try {
      await api.parking.addSecurityToParking(parkingId, security._id);
      setAddSecurityModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 15 }}>
            Assign Security
          </Text>
          <Ionicons
            name="close-sharp"
            size={24}
            color="black"
            onPress={() => setAddSecurityModal(false)}
          />
        </View>
        <TextInput
          value={phoneNo}
          style={styles.input}
          placeholder="Enter Security Phone No."
          onChangeText={(txt) => {
            setPhoneNo(txt);
          }}
        />
        <View style={styles.divider}></View>
        {security && (
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
                {security?.name || "Deep Agarwal"}
              </Text>
            </View>
          </View>
        )}
        <View style={styles.divider}></View>
        {security && security?.name !== "No Security found" ? (
          <TouchableOpacity style={styles.button} onPress={confirmSecurity}>
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Confirm Security
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={searchSecurity}>
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Search Security
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(176, 176, 176, 0.5)",
    alignContent: "center",
    justifyContent: "center",
    zIndex: 2,
    position: "absolute",
    top: 0,
  },
  container_card: {
    marginHorizontal: "10%",
    width: "80%",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  card: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card_header: {
    fontWeight: "600",
    fontSize: 13,
    marginBottom: 2,
  },
  divider: {
    width: "100%",
    height: 12,
  },
  button: {
    width: "100%",
    backgroundColor: "teal",
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginTop: 5,
  },
  input: {
    marginTop: 10,
    paddingTop: 0,
    paddingBottom: 3,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
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

export default AddSecurityModal;
