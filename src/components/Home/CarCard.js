import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";

const CarCard = ({ carDetails }) => {
  return (
    <View style={styles.container}>
      <Image
        contentFit="cover"
        source={
          carDetails?.image ||
          "https://gomechprod.blob.core.windows.net/gm-retail-app/New%20Car%20Model%20Images/brand-9-model-205.png"
        }
        style={{ width: 80, height: 40, borderRadius: 100 }}
      />
      <View >
        <Text style={{ fontWeight: "600", fontSize: 12 }}>
          {carDetails?.name || "Maruti Suzuki Baleno"}
        </Text>
        <Text style={{ fontWeight: "500", color: "gray", fontSize: 12 }}>
          {carDetails?.number || "WB 24 6A 1567"}
        </Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={{ fontSize: 10, color: "gray" }}>Time Remaining</Text>
        <Text style={{fontSize: 12, fontWeight: "500", textAlign: "right"}}>01:26:24</Text>
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
    paddingVertical: 0,
    marginVertical: 0
    // paddingBottom: 5,
    // justifyContent: "space-between",

  },
});

export default CarCard;