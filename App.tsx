import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation";
import store from "./store/store";

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
