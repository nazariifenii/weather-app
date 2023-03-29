import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";

import { Colors } from "./src/constants";
import AppNavigator from "./src/navigation";
import store from "./src/store/store";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
});
