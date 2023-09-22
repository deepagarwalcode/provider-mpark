import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { extractTimeRemainingString } from "../../lib/utils";

const CarCard = ({ carDetails, endTime }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime((old) => {
        return old + 1;
      }, 1000);
    });
  }, [time]);

  return (
    <View style={styles.container}>
      <Image
        contentFit="cover"
        source={
          carDetails?.carImg ||
          "https://gomechprod.blob.core.windows.net/gm-retail-app/New%20Car%20Model%20Images/brand-9-model-205.png"
        }
        style={{ width: 80, height: 40, borderRadius: 100 }}
      />
      <View>
        <Text style={{ fontWeight: "600", fontSize: 12 }}>
          {carDetails?.company} {carDetails?.model || "Maruti Suzuki Baleno"}
        </Text>
        <Text style={{ fontWeight: "500", color: "gray", fontSize: 12 }}>
          {carDetails?.carNumber || "WB 24 6A 1567"}
        </Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={{ fontSize: 10, color: "gray" }}>Time Remaining</Text>
        <Text style={{ fontSize: 12, fontWeight: "500", textAlign: "right" }}>
          {extractTimeRemainingString(endTime)}
        </Text>
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
    marginVertical: 0,
    // paddingBottom: 5,
    // justifyContent: "space-between",
  },
});

export default CarCard;
