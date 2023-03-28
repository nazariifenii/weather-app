import { StyleSheet, View, Platform, StatusBar } from "react-native";
import AppNavigator from "./src/navigation";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
