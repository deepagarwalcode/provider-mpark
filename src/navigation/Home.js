import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ParkingSpaceScreen from "../screens/ParkingSpaceScreen";
import BookingHistoryScreen from "../screens/BookingHistoryScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ParkingSpaceScreen" component={ParkingSpaceScreen} />
        <Stack.Screen name="BookingHistoryScreen" component={BookingHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
