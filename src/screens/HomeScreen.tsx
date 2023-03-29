import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";
import { Colors } from "../constants";

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>🌤 Hello, check the location in city: Lviv</Text>
    <Button
      color={Colors.reefBlue}
      title="Open section list"
      onPress={() => navigation.navigate("WeatherListScreen")}
    />
    <Button
      color={Colors.reefBlue}
      title="Open calendar"
      onPress={() => navigation.navigate("WeatherCalendarScreen")}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 35,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});

export default HomeScreen;
