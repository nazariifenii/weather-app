import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
