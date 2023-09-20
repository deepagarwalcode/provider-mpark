import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeNavigator from "./src/navigation/Home";
import HomeScreen from "./src/screens/HomeScreen";
import { AuthContext } from "./src/contexts/auth";
import { ParkingContext } from "./src/contexts/auth/Parking";

export default function App() {
  return (
    <AuthContext>
      <ParkingContext>
        <HomeNavigator />
      </ParkingContext>
    </AuthContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: "center",
    backgroundColor: "white",
    // justifyContent: 'center',
  },
});
