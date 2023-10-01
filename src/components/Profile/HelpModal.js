import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  
  const HelpModal = ({ setHelpModal }) => {
    const email = "carosoindia@gmail.com";
    const phoneNumber = "+919073901574";
  
    const handleEmailPress = () => {
      Linking.openURL(`mailto:${email}`);
    };
  
    const handlePhonePress = () => {
      Linking.openURL(`tel:${phoneNumber}`);
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
            <Text style={{ fontWeight: "600", fontSize: 15 }}>Contact Us</Text>
            <Ionicons
              name="close-sharp"
              size={24}
              color="black"
              onPress={() => setHelpModal(false)}
            />
          </View>
          <TouchableOpacity onPress={handleEmailPress}>
            <View style={styles.card}>
              <Text style={styles.card_header}>E-mail</Text>
              <Text style={styles.card_value}>{email}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePhonePress}>
            <View style={[styles.card, { paddingBottom: 5, paddingTop: 5 }]}>
              <Text style={styles.card_header}>Call Us</Text>
              <Text style={styles.card_value}>{phoneNumber}</Text>
            </View>
          </TouchableOpacity>
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
  
      marginHorizontal: "15%",
      width: "70%",
      backgroundColor: "white",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      borderColor: "lightgray",
      borderWidth: 1,
    },
    card: {
      paddingVertical: 10,
    },
    card_header: {
      fontWeight: "600",
      fontSize: 13,
      marginBottom: 2,
    },
    divider: {
      width: "100%",
      backgroundColor: "lightgray",
      height: 1,
    },
  });
  
  export default HelpModal;
  