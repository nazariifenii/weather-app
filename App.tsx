import { StyleSheet, Text, View } from "react-native";
import { OPEN_WEATHER_MAP_API_URL } from "@env";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{OPEN_WEATHER_MAP_API_URL}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
