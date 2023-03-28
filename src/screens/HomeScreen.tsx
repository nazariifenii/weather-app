import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "src/store/rootReducer";
import { Creators } from "../store/actions";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const weatherByWeek: any = useSelector(
    (state: RootState) => state.weather.weatherForecastByWeek
  );

  useEffect(() => {
    dispatch(Creators.fetchWeatherForecast(16));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={weatherByWeek}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.dayName}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default HomeScreen;
