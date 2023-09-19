import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useAuth } from "../contexts/auth";

const LoginScreen = ({ navigation }) => {
  const auth = useAuth();

  console.log(auth.isLoading, auth.user)
  const [phoneNo, setPhoneNo] = useState("");

  const handleSubmit = async () => {
    try {
      await auth.login({ phoneNo });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Mpark</Text>

      <Text style={styles.label}>Mobile</Text>

      <View style={styles.input_container}>
        {/* <View style={styles.icon}>
          <Octicons
            style={{ paddingLeft: 3 }}
            name="device-mobile"
            size={24}
            color="black"
          />
        </View> */}
        <TextInput onChangeText={(text) => setPhoneNo(text)} placeholder="Enter Mobile No." />
      </View>
      <Text style={styles.label}>OTP</Text>

      <View style={styles.input_container}>
        {/* <View style={styles.icon}>
          <Ionicons name="lock-open-outline" size={24} color="black" />
        </View> */}
        <TextInput placeholder="Enter OTP" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text
          style={{ color: "white", fontWeight: "600", textAlign: "center" }}
        >
          Submit OTP
        </Text>
      </TouchableOpacity>
      <View style={styles.redirect_texts}>
        <Text style={styles.redirect}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={[styles.redirect, { color: "teal", fontWeight: "500" }]}>
            Signup now!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
    paddingHorizontal: "10%",

    // paddingTop: 70
  },
  title: {
    marginBottom: 20,
    fontWeight: "700",
    fontSize: 20,
  },
  input_container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 7,
    gap: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
    marginTop: 5,
  },
  icon: {
    minWidth: 30,
    // backgroundColor: "blue",
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "teal",
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginTop: 20,
  },
  label: {
    fontWeight: "600",
    fontSize: 12,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  redirect_texts: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
});

export default LoginScreen;
